import fs from 'fs';
import { Readable } from 'stream';
import { toStr } from '../libs/libType';
import { debugLog, errorLog } from "../libs/libFormat";
// import { arrayForEachAsync } from './_libCommon';

export const fileExt = (n) => { return toStr(n).split('.').pop().trim().toLowerCase(); };

export const streamToBuffer = async (stream) => {
  //Read a whole stream into buffer
  return new Promise((resolve, reject) => {
    try {
      var buffers = [];
      stream.on('data', data => buffers.push(data));
      stream.on('end', () => {
        var buffer = Buffer.concat(buffers);
        resolve(buffer);
      });
    } catch (err) {
      reject(err);
    }
  });
};

export const S3CreateReadStream = (s3, Bucket, Key) => {
  return s3.getObject({ Bucket, Key }).createReadStream();
};

export const S3ReadFile = async (s3, Bucket, Key) => {
  const resp = await s3.getObject({ Bucket, Key }).promise();
  return resp.Body;
};

export const S3DeleteObj = async (s3, Bucket, Key) => {
  if (process.env.cfg === 'offline') {
    await debugLog({ Func: 'S3DeleteObj() offline', Bucket, Key });
    return;
  }
  if (!s3 || !Bucket || !Key) return;
  try {
    await s3.deleteObject({ Bucket, Key }).promise();
  } catch (e) { console.error(e); };
};

export const S3WriteBuffer = async (s3, Bucket, Key, bin, publicRead = 1) => {
  await debugLog("WRITING ZIP FILE IN BUCKET");
  const ACL = 'bucket-owner-full-control';
  const params = {
    Bucket, Key, /* required */
    Body: bin, //Buffer.from('...') || 'STRING_VALUE' || streamObject,
    ContentType: 'binary',   // TODO: application/octet-stream for binary
    ACL, //private |  | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | ,
  };
  return s3.putObject(params).promise();
};

export const S3WriteLargeBuffer = async (s3, bucket, key, bin) => {

  await debugLog("WRITING Large ZIP FILE IN BUCKET");
  const ACL = 'bucket-owner-full-control';
  const params = { Bucket: bucket, Key:key, Body: bin};
  let options = { partSize: 5 * 1024 * 1024, queueSize: 10 };
  let upload =  await s3.upload(params, options);
  upload.on('httpUploadProgress', function  (evt) {
    if (evt) {
      console.log('Completed ' + (evt.loaded * 100 / evt.total).toFixed() + '% of upload');
    }
  }).send((error, data) => {
    if (error) {
      console.error(`error creating stream to s3 ${error.name} ${error.message} ${error.stack}`);
    }
    console.log(`image zip file now sending ${data}`);
  });
  return upload;
};

//https://github.com/aws/aws-sdk-js/issues/2741
//https://medium.com/@tsunghualee/how-to-upload-download-file-to-aws-s3-using-pre-signed-url-e38fa11562c2

export const S3SignDownload = async (s3, Bucket, Key) => {
  if (!Key) return '';
  // if (process.env.cfg === 'offline') return 'write a path' + Key;
  const params = {
    Bucket,
    Key,
    Expires: 3600,
  };
  return new Promise((resolve, reject) => {
    s3.getSignedUrl('getObject', params, function (err, url) {
      if (err) {
        reject(err);
      } else {
        resolve(url);
      }
    });
  });
};

export const S3SignUpload = async (s3, Bucket, key,
  Fields = {}, Expires = 3600, minSize = 0, maxSize = Infinity) => {

  const exists = await S3BucketExist(s3, Bucket);
  console.log({s3});
  console.log({Bucket});
  if(!exists){
    let thisConfig = {
      AllowedHeaders:["*"],
      AllowedMethods:["PUT", "POST"],
    //   AllowedOrigins:(process.env.cfg==='offline') ?['*']:[process.env.siteProtocol+'://'+process.env.deploy_cname],
      AllowedOrigins:['*'],
      ExposeHeaders:[],
      MaxAgeSeconds:3600
    };

    let corsRules = new Array(thisConfig);
    let temp= {Bucket};
    let corsParams = {Bucket, CORSConfiguration: {CORSRules: corsRules}};
    try{
      await s3.createBucket(temp).promise();
      await s3.putBucketCors(corsParams).promise();
    }
    catch(err){
      console.log({err});
    }
  }
  const params = {
    Bucket,
    Expires: 3600,
    Fields: { ...Fields, key },
    Conditions: [
      ['content-length-range', minSize, maxSize],
    ],
  };
  return s3.createPresignedPost(params);
};

export const S3BucketExist = async (s3, bucket) => {
  const options = {
    Bucket: bucket,
  };
  try {
    await s3.headBucket(options);
    return true;
  } catch (error) {
    if (error.statusCode === 404) {
      return false;
    }
    throw error;
  }
};

export const S3ListObjects = async (s3, Bucket) => {
  return s3.listObjects({ Bucket }).promise();
};

export const S3ObjectExist = (s3, bucket, key) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        Bucket: bucket,
        Key: key
      };

      s3.headObject(params, async (err, data) => {
        if (err) resolve(false);
        resolve(true);
      });
    } catch (error) {
      await debugLog('Exception: ', error.code);
      reject(error);
    };
  });
};


export const s3rm = async (s3, Bucket, filenames) => {
  let params = { Bucket: Bucket, Delete: { Objects: [], Quiet: false}};

  if (filenames.length === 0) return;

  filenames.forEach((item) => {
    params.Delete.Objects.push({Key:item});
  });
  //await debugLog('delete params: ', params.Delete);
  return await _s3rmdir(s3, params);
};


const _s3rmdir = async (s3, params) => {
  return new Promise((resolve, reject) => {
    s3.deleteObjects(params, (err, data) => {
      if (err) {
        errorLog(err);
        reject(err);
      } else { resolve(data); };
    });
  });
};


export const tryCopyS3Media = async (s3, privateBucket, lot, file, s3Key, bucketPublic, publicRead, copied) => {
    if (!s3Key) {
        return;
    }
    const copy_source= privateBucket+ "/"+lot+"/"+file;
    let params = {
        Bucket: bucketPublic, 
        CopySource: copy_source, 
        Key: s3Key
    };
    await s3.copyObject(params, function(err, data) {
        if (err) debugLog(err, err.stack); 
    });
    return '';
};

export const tryDeleteS3Media = async (s3, s3Key, bucketPublic) => {
    if (!s3Key) {
        return;
    }
    
    let params = {
        Bucket: bucketPublic, 
        Key: s3Key
    };
    try{
        await debugLog({tryDeleteS3Media:s3, s3Key, bucketPublic });
        await s3.deleteObject(params, function(err, data) {
            if (err) debugLog(err, err.stack);  //
            });
    }catch(err){ console.error(err); }
    return '';
};