import * as awsCfg from '../aws-cfg';
import * as util from "../libs/_libCommon";
import {stripEmpty} from '../libs/libDynamo';
import {S3SignUpload, S3SignDownload} from '../libs/libS3';

import {genSessionId} from '../libs/sessionUtil';
import {toStr} from '../libs/libType';
import {timeStampNowGMT} from '../libs/libTime';
import {debugLog, errMsgs} from '../libs/libFormat';


import { Settings } from '../settings';
import {getEnv, getEnvs} from '../apis/appEnv';


const getSettings = async () => {
  
};

const clearLogin = async (evt, ctx, req, session, ddb, s3, deleteSession) => {
  
};

// export const apiSysVer =  async (evt, ctx, req, session, ddb) => {
//     return util.ApiSuccess(evt, {
//         codebuild_start_time: process.env.codebuild_start_time,
//         codebuild_source_version: process.env.codebuild_source_version,
//         codebuild_build_number: process.env.codebuild_build_number,
//     });
// };

// export const apiInit = async (evt, ctx, req, session, ddb) => {
//     debugLog("IN INIT");
//     //return as ApiLogin For Resume Refresh
//     const ret = {req};
//     const local = (process.env.cfg === 'offline');
//     ret.settings = await getSettings();
//     ret.user = session.user;
//     return util.ApiSuccess(evt, ret);
// };

export const apiLogout = async (evt, ctx, req, session, ddb) => {
    await clearLogin(evt, ctx, req, session, ddb, awsCfg.newS3(), 1);
    return util.ApiSuccess(evt, { user:false, sessionId:'' });
};

const setupLoginSession = (session, evt) => {
    // session.sessionStart = timeStampNowGMT();
    // session.userAgent = getAgentLine(evt);
    // session.code = 'SESS';
};

export const apiLogin = async (evt, ctx, req, session, ddb) => {

    debugLog("************login******");
    const ret = {errs:[]};

    return util.ApiSuccess(evt, ret);
};

export const apiTokenLogin = async (evt, ctx, req, session, ddb) => {
 
    return util.ApiSuccess(evt, ret);
};

const s3key = "testdir/testfile.txt";
export const apiUpload = async (evt, ctx, req) => {
    const s3 = awsCfg.newS3();
    const postUrl = await S3SignUpload(s3, getEnv('bucket'), s3key, {k1:'v1', k2: 'v2'}, 3600, 0, 10000000);
    //await debugLog('S3SignUpload()', { postUrl });
    return util.ApiSuccess(evt, { postUrl });
};
export const apiDownload =  async (evt, ctx, req) => {
    const s3 = awsCfg.newS3();
    const u = await S3SignDownload(s3, getEnv('bucket'), s3key);
    //const res = { statusCode: 301, headers: { Location: 'https://google.com',}};
    //await debugLog('apiDownload', u || res);
    return util.ApiSuccess(evt, {body:u});
};

export const apiUploadMedia = async (key, bin, publicRead) => {
    const s3 = awsCfg.newS3();
    const bucket =  await getEnv('mediaBucket');
    const minSize = 0;
    const maxSize = 100000000;
    const postUrl = await S3SignUpload(s3, bucket, key, {}, 3600, minSize, maxSize);
    await debugLog('S3SignUpload()', { postUrl });
    // console.log('S3SignUpload()', { postUrl });
    return postUrl;
};

export const apiDownloadMedia =  async (key) => {
    const s3 = awsCfg.newS3();
    const bucket =  await getEnv('mediaBucket');
    const url = await S3SignDownload(s3, bucket, key);
    //const res = { statusCode: 301, headers: { Location: 'https://google.com',}};
    await debugLog('apiDownload', url);
    return url;
};

