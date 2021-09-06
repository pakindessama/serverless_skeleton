/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../src/apis/apiCommon.js":
/*!**************************************!*\
  !*** ../../../src/apis/apiCommon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiLogout": () => (/* binding */ apiLogout),
/* harmony export */   "apiLogin": () => (/* binding */ apiLogin),
/* harmony export */   "apiTokenLogin": () => (/* binding */ apiTokenLogin),
/* harmony export */   "apiUpload": () => (/* binding */ apiUpload),
/* harmony export */   "apiDownload": () => (/* binding */ apiDownload),
/* harmony export */   "apiUploadMedia": () => (/* binding */ apiUploadMedia),
/* harmony export */   "apiDownloadMedia": () => (/* binding */ apiDownloadMedia)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aws-cfg */ "../../../src/aws-cfg.js");
/* harmony import */ var _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/_libCommon */ "../../../src/libs/_libCommon.js");
/* harmony import */ var _libs_libS3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/libS3 */ "../../../src/libs/libS3.js");
/* harmony import */ var _libs_libFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/libFormat */ "../../../src/libs/libFormat.js");
/* harmony import */ var _apis_appEnv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/appEnv */ "../../../src/apis/appEnv.js");







const getSettings = async () => {};

const clearLogin = async (evt, ctx, req, session, ddb, s3, deleteSession) => {}; // export const apiSysVer =  async (evt, ctx, req, session, ddb) => {
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


const apiLogout = async (evt, ctx, req, session, ddb) => {
  await clearLogin(evt, ctx, req, session, ddb, _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newS3(), 1);
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(evt, {
    user: false,
    sessionId: ''
  });
};

const setupLoginSession = (session, evt) => {// session.sessionStart = timeStampNowGMT();
  // session.userAgent = getAgentLine(evt);
  // session.code = 'SESS';
};

const apiLogin = async (evt, ctx, req, session, ddb) => {
  (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)("************login******");
  const ret = {
    errs: []
  };
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(evt, ret);
};
const apiTokenLogin = async (evt, ctx, req, session, ddb) => {
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(evt, ret);
};
const s3key = "testdir/testfile.txt";
const apiUpload = async (evt, ctx, req) => {
  const s3 = _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newS3();
  const postUrl = await (0,_libs_libS3__WEBPACK_IMPORTED_MODULE_3__.S3SignUpload)(s3, (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_5__.getEnv)('bucket'), s3key, {
    k1: 'v1',
    k2: 'v2'
  }, 3600, 0, 10000000); //await debugLog('S3SignUpload()', { postUrl });

  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(evt, {
    postUrl
  });
};
const apiDownload = async (evt, ctx, req) => {
  const s3 = _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newS3();
  const u = await (0,_libs_libS3__WEBPACK_IMPORTED_MODULE_3__.S3SignDownload)(s3, (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_5__.getEnv)('bucket'), s3key); //const res = { statusCode: 301, headers: { Location: 'https://google.com',}};
  //await debugLog('apiDownload', u || res);

  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(evt, {
    body: u
  });
};
const apiUploadMedia = async (key, bin, publicRead) => {
  const s3 = _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newS3();
  const bucket = await (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_5__.getEnv)('mediaBucket');
  const minSize = 0;
  const maxSize = 100000000;
  const postUrl = await (0,_libs_libS3__WEBPACK_IMPORTED_MODULE_3__.S3SignUpload)(s3, bucket, key, {}, 3600, minSize, maxSize);
  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)('S3SignUpload()', {
    postUrl
  }); // console.log('S3SignUpload()', { postUrl });

  return postUrl;
};
const apiDownloadMedia = async key => {
  const s3 = _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newS3();
  const bucket = await (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_5__.getEnv)('mediaBucket');
  const url = await (0,_libs_libS3__WEBPACK_IMPORTED_MODULE_3__.S3SignDownload)(s3, bucket, key); //const res = { statusCode: 301, headers: { Location: 'https://google.com',}};

  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)('apiDownload', url);
  return url;
};

/***/ }),

/***/ "../../../src/apis/apiGet.js":
/*!***********************************!*\
  !*** ../../../src/apis/apiGet.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiTest": () => (/* binding */ apiTest),
/* harmony export */   "apiTest2": () => (/* binding */ apiTest2),
/* harmony export */   "apiGetPatientByUser": () => (/* binding */ apiGetPatientByUser),
/* harmony export */   "apiGetVaccineByPatient": () => (/* binding */ apiGetVaccineByPatient),
/* harmony export */   "apiGetNewsBy": () => (/* binding */ apiGetNewsBy),
/* harmony export */   "apiGetVaccinesByCountry": () => (/* binding */ apiGetVaccinesByCountry),
/* harmony export */   "apiGetAllPatients": () => (/* binding */ apiGetAllPatients)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ddb_cardDDBPatient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ddb/cardDDBPatient */ "../../../src/ddb/cardDDBPatient.js");
/* harmony import */ var _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/_libCommon */ "../../../src/libs/_libCommon.js");



const apiTest = (event, context, request, ddb) => {
  console.log({
    Test: request
  });
  const ret = {};
  ret.test = "OK";
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(event, ret);
};
const apiTest2 = (event, context, request, ddb) => {
  console.log({
    Test2: request
  });
  return {
    test: 'test2'
  };
};
const apiGetPatientByUser = user => {};
const apiGetVaccineByPatient = patient => {};
const apiGetNewsBy = user => {};
const apiGetVaccinesByCountry = country => {};
const apiGetAllPatients = async (event, context, request, ddb) => {
  const ret = {};
  ret.test = "OK";
  const patients = await (0,_ddb_cardDDBPatient__WEBPACK_IMPORTED_MODULE_1__.fetchAllPatients)(ddb);
  ret.patients = patients;
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess(event, ret);
};

/***/ }),

/***/ "../../../src/apis/apiUpdate.js":
/*!**************************************!*\
  !*** ../../../src/apis/apiUpdate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiUpdateUser": () => (/* binding */ apiUpdateUser),
/* harmony export */   "apiUpdateUserPatient": () => (/* binding */ apiUpdateUserPatient),
/* harmony export */   "apiUpdatePatientVaccine": () => (/* binding */ apiUpdatePatientVaccine)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_libCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/_libCommon */ "../../../src/libs/_libCommon.js");
/* harmony import */ var _ddb_cardDDBPatient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ddb/cardDDBPatient */ "../../../src/ddb/cardDDBPatient.js");



const apiUpdateUser = async (event, context, request, ddb) => {
  const patient = request.patient;
  await (0,_ddb_cardDDBPatient__WEBPACK_IMPORTED_MODULE_2__.addPatient)(db, item, table);
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_1__.ApiSuccess(event, patient);
};
const apiUpdateUserPatient = async (event, context, request, ddb) => {
  const patient = request.patient;
  patient.userId = 'max';
  await (0,_ddb_cardDDBPatient__WEBPACK_IMPORTED_MODULE_2__.addPatient)(ddb, patient);
  return _libs_libCommon__WEBPACK_IMPORTED_MODULE_1__.ApiSuccess(event, patient);
};
const apiUpdatePatientVaccine = () => {};

/***/ }),

/***/ "../../../src/apis/appEnv.js":
/*!***********************************!*\
  !*** ../../../src/apis/appEnv.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEnv": () => (/* binding */ getEnv),
/* harmony export */   "nameSsm2Env": () => (/* binding */ nameSsm2Env),
/* harmony export */   "nameEnv2Ssm": () => (/* binding */ nameEnv2Ssm),
/* harmony export */   "getEnvs": () => (/* binding */ getEnvs)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_libTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/libTime */ "../../../src/libs/libTime.js");
/* harmony import */ var _libs_libSSM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/libSSM */ "../../../src/libs/libSSM.js");
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../aws-cfg */ "../../../src/aws-cfg.js");




const ssmSite = 'oupc-chi-classic';
let __ssm = 0;

const getSSM = () => {
  if (!__ssm) __ssm = (0,_aws_cfg__WEBPACK_IMPORTED_MODULE_3__.newSSM)();
  return __ssm;
};

let __ssmExpire = 0;
let __envCache = {};

const ssmCheckExpire = () => {
  const ts = (0,_libs_libTime__WEBPACK_IMPORTED_MODULE_1__.timeStampNowGMT)();

  if (ts > __ssmExpire) {
    __ssmExpire = ts + 180000;
    __envCache = {};
  }
};

const getEnv = async (name, _stage = '') => {
  console.log({
    _stage
  });
  ssmCheckExpire();
  await getEnvs([name], _stage);
  return __envCache[name];
};
const nameSsm2Env = n => n.split('/').slice(3).join("_");
const nameEnv2Ssm = (stage, n) => '/' + ssmSite + '/' + stage + '/' + n.replace(/_/g, '/');
const getEnvs = async (envNames = [], _stage = '') => {
  //await debugLogX({getEnv: envNames});
  ssmCheckExpire(); // load cache missing 

  const stage = _stage || process.env.cfg;
  console.log({
    envNames
  });
  const cacheKeys = Object.keys(__envCache);

  if (stage !== 'offline') {
    const gets = [];
    envNames.forEach(n => {
      if (cacheKeys.indexOf(n) < 0) gets.push(nameEnv2Ssm(stage, n));
    });
    const vals = await (0,_libs_libSSM__WEBPACK_IMPORTED_MODULE_2__.ssmGet)(getSSM(), gets);
    Object.keys(vals).forEach(key => {
      __envCache[nameSsm2Env(key)] = vals[key];
    });
  }

  const ret = {};
  envNames.forEach(n => {
    if (!__envCache[n]) __envCache[n] = process.env[n]; //fallback to env

    ret[n] = __envCache[n];
  });
  return ret;
};

/***/ }),

/***/ "../../../src/aws-cfg.js":
/*!*******************************!*\
  !*** ../../../src/aws-cfg.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseCfg": () => (/* binding */ baseCfg),
/* harmony export */   "newSES": () => (/* binding */ newSES),
/* harmony export */   "newSSM": () => (/* binding */ newSSM),
/* harmony export */   "newLambda": () => (/* binding */ newLambda),
/* harmony export */   "newS3": () => (/* binding */ newS3),
/* harmony export */   "newDynamo": () => (/* binding */ newDynamo),
/* harmony export */   "newCloudWatchLogs": () => (/* binding */ newCloudWatchLogs),
/* harmony export */   "newSNS": () => (/* binding */ newSNS),
/* harmony export */   "newDynamoBackup": () => (/* binding */ newDynamoBackup)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk */ "aws-sdk");
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_appEnv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis/appEnv */ "../../../src/apis/appEnv.js");




const baseCfg = () => {
  const cfg = {
    region: process.env.awsRegion,
    entrypoint: "localhost:8000"
  };
  if (process.env.awsAccessKeyId) cfg.accessKeyId = process.env.awsAccessKeyId;
  return cfg;
};
aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().config.update(baseCfg());
const newSES = async () => {
  const {
    notification_sesRegion
  } = await (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_3__.getEnvs)(['notification_sesRegion']);
  const sesCfg = {
    region: notification_sesRegion
  };
  return new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().SES)(sesCfg);
};
const newSSM = (extraCfg = {}) => new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().SSM)({ ...baseCfg(),
  ...extraCfg
});
const newLambda = () => {
  return process.env.cfg === 'offline' ? new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().Lambda)({
    apiVersion: '2020',
    endpoint: process.env.awsLambdaEndpoint,
    httpOptions: {
      agent: new (http__WEBPACK_IMPORTED_MODULE_2___default().Agent)({})
    }
  }) : new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().Lambda)({
    apiVersion: '2020',
    endpoint: process.env.awsLambdaEndpoint,
    httpOptions: {
      timeout: 30000,
      connectTimeout: 5000
    }
  });
};
const newS3 = () => new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().S3)({ ...baseCfg(),
  apiVersion: '2006-03-01'
});
const newDynamo = () => {
  const {
    dynamoRegion,
    dynamoHost
  } = process.env;

  if (dynamoRegion && dynamoHost) {
    const ddbCfg = {
      region: dynamoRegion,
      endpoint: new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().Endpoint)(dynamoHost),
      convertEmptyValues: true,
      httpOptions: {
        agent: new (http__WEBPACK_IMPORTED_MODULE_2___default().Agent)({})
      }
    };
    return new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().DynamoDB.DocumentClient)(ddbCfg);
  }

  return new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().DynamoDB.DocumentClient)({ ...baseCfg(),
    convertEmptyValues: true
  });
};
const newCloudWatchLogs = () => {
  return new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().CloudWatchLogs)();
};
const newSNS = async () => {
  return new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().SNS)();
};
const newDynamoBackup = () => {
  return new (aws_sdk__WEBPACK_IMPORTED_MODULE_1___default().DynamoDB)();
};

/***/ }),

/***/ "../../../src/ddb/cardDDB.js":
/*!***********************************!*\
  !*** ../../../src/ddb/cardDDB.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataTable": () => (/* binding */ dataTable),
/* harmony export */   "CodeItem": () => (/* binding */ CodeItem),
/* harmony export */   "CodePatient": () => (/* binding */ CodePatient)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const singleTable = process.env.dataTableName;
const dataTable = singleTable;
const CodeItem = 'CI';
const CodePatient = 'CP';

/***/ }),

/***/ "../../../src/ddb/cardDDBItem.js":
/*!***************************************!*\
  !*** ../../../src/ddb/cardDDBItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAllItems": () => (/* binding */ fetchAllItems),
/* harmony export */   "fetchItemsBySks": () => (/* binding */ fetchItemsBySks),
/* harmony export */   "fetchItemBySK": () => (/* binding */ fetchItemBySK),
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aws-cfg */ "../../../src/aws-cfg.js");
/* harmony import */ var _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/libDynamo */ "../../../src/libs/libDynamo.js");
/* harmony import */ var _cardDDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardDDB */ "../../../src/ddb/cardDDB.js");
/* harmony import */ var _libs_libFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/libFormat */ "../../../src/libs/libFormat.js");
/* harmony import */ var _libs_libS3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/libS3 */ "../../../src/libs/libS3.js");






const fetchAllItems = async (ddb, table, p = 1, rpp = 1) => {
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.queryPage(ddb, p, rpp, p !== 1, _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, 'ppk=:v0', [_cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodeItem]);
};
const fetchItemsBySks = async (ddb, itemSKs, table) => {
  const Keys = _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.batchKeys({
    ppk: _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodeItem
  }, 'psk', itemSKs);
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.batchGetAll(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, Keys);
};
const fetchItemBySK = async (ddb, itemId, table) => {
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.fetchRow(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, {
    psk: itemId,
    ppk: _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodeItem
  });
}; // Modified function 

const addItem = async (ddb, r, table) => {
  let item = { ...r,
    code: _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodeItem
  };
  item.ppk = _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodeItem;
  item.psk = r.title;
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.putItem(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, item);
};
const deleteItem = async (ddb, r, table) => {
  let item = {};
  item.psk = r.title;
  item.ppk = _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodeItem;
  await _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.deleteItem(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, item);
};

/***/ }),

/***/ "../../../src/ddb/cardDDBPatient.js":
/*!******************************************!*\
  !*** ../../../src/ddb/cardDDBPatient.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAllPatients": () => (/* binding */ fetchAllPatients),
/* harmony export */   "fetchpatientsBySks": () => (/* binding */ fetchpatientsBySks),
/* harmony export */   "fetchpatientBySK": () => (/* binding */ fetchpatientBySK),
/* harmony export */   "addPatient": () => (/* binding */ addPatient),
/* harmony export */   "deletepatient": () => (/* binding */ deletepatient)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aws-cfg */ "../../../src/aws-cfg.js");
/* harmony import */ var _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/libDynamo */ "../../../src/libs/libDynamo.js");
/* harmony import */ var _cardDDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardDDB */ "../../../src/ddb/cardDDB.js");
/* harmony import */ var _libs_libFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/libFormat */ "../../../src/libs/libFormat.js");
/* harmony import */ var _libs_libS3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/libS3 */ "../../../src/libs/libS3.js");
/* harmony import */ var _libs_libTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/libTime */ "../../../src/libs/libTime.js");







const fetchAllPatients = async (ddb, table, p = 1, rpp = 1) => {
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.queryPage(ddb, p, rpp, p !== 1, _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, 'ppk=:v0', [_cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodePatient]);
};
const fetchpatientsBySks = async (ddb, patientSKs, table) => {
  const Keys = _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.batchKeys({
    ppk: _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodePatient
  }, 'psk', patientSKs);
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.batchGetAll(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, Keys);
};
const fetchpatientBySK = async (ddb, patientId, table) => {
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.fetchRow(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, {
    psk: patientId,
    ppk: _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodePatient
  });
}; // Modified function 

const addPatient = async (ddb, r, table) => {
  const now = (0,_libs_libTime__WEBPACK_IMPORTED_MODULE_6__.timeStampNowGMT)();
  const psk = _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.joinIds(r.userId, now);
  const patient = { ...r,
    code: _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodePatient
  };
  patient.ppk = _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodePatient;
  patient.psk = psk;
  return _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.putItem(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, patient);
};
const deletepatient = async (ddb, r, table) => {
  let patient = {};
  patient.psk = r.title;
  patient.ppk = _cardDDB__WEBPACK_IMPORTED_MODULE_3__.CodePatient;
  await _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__.deletepatient(ddb, table || _cardDDB__WEBPACK_IMPORTED_MODULE_3__.dataTable, patient);
};

/***/ }),

/***/ "../../../src/libs/_libCommon.js":
/*!***************************************!*\
  !*** ../../../src/libs/_libCommon.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "batchDeleteAll": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.batchDeleteAll),
/* harmony export */   "batchGetAll": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.batchGetAll),
/* harmony export */   "batchGetAllBySecKey": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.batchGetAllBySecKey),
/* harmony export */   "batchKeys": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.batchKeys),
/* harmony export */   "batchPutAll": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.batchPutAll),
/* harmony export */   "cache": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.cache),
/* harmony export */   "copyAll": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.copyAll),
/* harmony export */   "ddbNow": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.ddbNow),
/* harmony export */   "deleteItem": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.deleteItem),
/* harmony export */   "fetchRow": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.fetchRow),
/* harmony export */   "joinIds": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.joinIds),
/* harmony export */   "putItem": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.putItem),
/* harmony export */   "putItem_": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.putItem_),
/* harmony export */   "queryAll": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.queryAll),
/* harmony export */   "queryAllV2": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.queryAllV2),
/* harmony export */   "queryOnce": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.queryOnce),
/* harmony export */   "queryOnceV2": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.queryOnceV2),
/* harmony export */   "queryPage": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.queryPage),
/* harmony export */   "queryPageV2": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.queryPageV2),
/* harmony export */   "rows2Ids": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.rows2Ids),
/* harmony export */   "scanAll": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.scanAll),
/* harmony export */   "scanN": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.scanN),
/* harmony export */   "splitIds": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.splitIds),
/* harmony export */   "stripEmpty": () => (/* reexport safe */ _libDynamo__WEBPACK_IMPORTED_MODULE_1__.stripEmpty),
/* harmony export */   "ApiFailure": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.ApiFailure),
/* harmony export */   "ApiResponseBinary": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.ApiResponseBinary),
/* harmony export */   "ApiResponseDownload": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.ApiResponseDownload),
/* harmony export */   "ApiResponseUtf8": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.ApiResponseUtf8),
/* harmony export */   "ApiSuccess": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.ApiSuccess),
/* harmony export */   "failure": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.failure),
/* harmony export */   "success": () => (/* reexport safe */ _libResponse__WEBPACK_IMPORTED_MODULE_2__.success)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libDynamo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libDynamo */ "../../../src/libs/libDynamo.js");
/* harmony import */ var _libResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libResponse */ "../../../src/libs/libResponse.js");


 // export * from "./sessionUtil";
// export * from "./libArray";

/***/ }),

/***/ "../../../src/libs/libDynamo.js":
/*!**************************************!*\
  !*** ../../../src/libs/libDynamo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "putItem": () => (/* binding */ putItem),
/* harmony export */   "putItem_": () => (/* binding */ putItem_),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "batchDeleteAll": () => (/* binding */ batchDeleteAll),
/* harmony export */   "batchPutAll": () => (/* binding */ batchPutAll),
/* harmony export */   "batchGetAll": () => (/* binding */ batchGetAll),
/* harmony export */   "batchGetAllBySecKey": () => (/* binding */ batchGetAllBySecKey),
/* harmony export */   "queryOnce": () => (/* binding */ queryOnce),
/* harmony export */   "queryOnceV2": () => (/* binding */ queryOnceV2),
/* harmony export */   "queryAll": () => (/* binding */ queryAll),
/* harmony export */   "queryAllV2": () => (/* binding */ queryAllV2),
/* harmony export */   "queryPage": () => (/* binding */ queryPage),
/* harmony export */   "queryPageV2": () => (/* binding */ queryPageV2),
/* harmony export */   "scanAll": () => (/* binding */ scanAll),
/* harmony export */   "scanN": () => (/* binding */ scanN),
/* harmony export */   "copyAll": () => (/* binding */ copyAll),
/* harmony export */   "fetchRow": () => (/* binding */ fetchRow),
/* harmony export */   "ddbNow": () => (/* binding */ ddbNow),
/* harmony export */   "batchKeys": () => (/* binding */ batchKeys),
/* harmony export */   "joinIds": () => (/* binding */ joinIds),
/* harmony export */   "splitIds": () => (/* binding */ splitIds),
/* harmony export */   "stripEmpty": () => (/* binding */ stripEmpty),
/* harmony export */   "rows2Ids": () => (/* binding */ rows2Ids),
/* harmony export */   "cache": () => (/* binding */ cache)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_libTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/libTime */ "../../../src/libs/libTime.js");
/* harmony import */ var _libs_libType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/libType */ "../../../src/libs/libType.js");
/* harmony import */ var _libs_libFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/libFormat */ "../../../src/libs/libFormat.js");

//https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchWriteItem.html
//The BatchWriteItem operation puts or deletes multiple items in one or more tables.
//A single call to BatchWriteItem can write up to 16 MB of data,
//which can comprise as many as 25 put or delete requests.
//Individual items to be written can be as large as 400 KB.
//BatchWriteItem may returns a ProvisionedThroughputExceededException.



const putItem = async (ddb, TableName, Item) => {
  console.log({
    putItem: Item.psk
  });
  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)({
    TableName,
    Item
  });

  try {
    await putItem_(ddb, TableName, stripEmpty(Item));

    if (process.env.cfg === 'offline') {
      await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('putItem');
      await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)(Item);
    }

    return true;
  } catch (err) {
    console.error('putItem() Err', {
      TableName,
      Item
    });
    console.error(err);
    return false;
  }
};
const putItem_ = async (ddb, TableName, Item) => {
  return ddb.put({
    TableName,
    Item
  }).promise();
};
const deleteItem = async (ddb, TableName, Key) => {
  try {
    console.log({
      'deleteItem() OK': Key,
      TableName
    });
    return ddb.delete({
      TableName,
      Key
    }).promise();
  } catch (err) {
    console.error('deleteItem() Err', {
      TableName,
      Key,
      err
    });
    console.error(err);
    return false;
  }
};
const batchDeleteAll = async (ddb, TableName, allKeys, params = {}) => {
  //per call limit:25 item x 400k per item, max 16MB total
  const keyLen = allKeys.length;
  const segSize = 25;
  var segHead = 0;

  try {
    while (segHead < keyLen) {
      const Keys = keyLen < segSize ? allKeys : allKeys.slice(segHead, segHead + segSize);
      const WrapKeys = Keys.map(Key => ({
        DeleteRequest: {
          Key
        }
      }));
      var p = { ...params,
        RequestItems: {
          [TableName]: WrapKeys
        }
      };

      while (1) {
        const ret = await ddb.batchWrite(p).promise();
        if (!ret.UnprocessedItems[TableName]) break;
        p.RequestItems = ret.UnprocessedItems;
      }

      segHead += segSize;
    }
  } catch (err) {
    console.error('batchDeleteAll() Err', {
      TableName,
      allKeys,
      params
    });
    throw err;
  }
};
const batchPutAll = async (ddb, TableName, allItems, params = {}) => {
  //per call limit:25 item x 400k per item, max 16MB total
  const len = allItems.length;
  const segSize = 25;
  var segHead = 0;

  try {
    while (segHead < len) {
      const Items = len < segSize ? allItems : allItems.slice(segHead, segHead + segSize);
      const WrapItems = Items.map(Item => ({
        PutRequest: {
          Item
        }
      }));
      var p = { ...params,
        RequestItems: {
          [TableName]: WrapItems
        }
      };

      while (1) {
        //await debugLog('batchPutAll', JSON.stringify(p));
        const ret = await ddb.batchWrite(p).promise();
        if (!ret.UnprocessedItems[TableName]) break;
        p.RequestItems = ret.UnprocessedItems;
      }

      segHead += segSize;
    }

    (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('batchPutAll() OK', {
      TableName,
      allItems,
      params
    });
  } catch (err) {
    console.error('batchPutAll() Err', {
      TableName,
      allItems,
      params
    });
    throw err;
  }
};
const batchGetAll = async (ddb, TableName, allKeys, params = {}) => {
  var Items = []; //await debugLog({TableName, allKeys});

  const keyLen = allKeys.length;
  const segSize = 99; //ddb limit is 100, smaller is safer

  var segHead = 0;

  try {
    while (segHead < keyLen) {
      const Keys = keyLen < segSize ? allKeys : allKeys.slice(segHead, segHead + segSize); //await debugLog(Keys);

      var p = { ...params,
        RequestItems: {
          [TableName]: {
            Keys
          }
        }
      };

      while (1) {
        console.log('ddbBatchGetAll', JSON.stringify(p));
        const ret = await ddb.batchGet(p).promise();
        Items = [...Items, ...ret.Responses[TableName]];
        if (!ret.UnprocessedKeys[TableName]) break;
        p.RequestItems = ret.UnprocessedKeys;
      }

      segHead += segSize;
    }
  } catch (err) {
    console.error('batchGetAll() Err', {
      TableName,
      allKeys,
      params
    });
    console.error(err);
  }

  return Items;
};
const batchGetAllBySecKey = async (ddb, TableName, allKeys, params = {}, IndexName = '') => {
  var Items = []; //await debugLog({TableName, allKeys});

  const keyLen = allKeys.length;
  const segSize = 99; //ddb limit is 100, smaller is safer

  var segHead = 0;

  try {
    while (segHead < keyLen) {
      const Keys = keyLen < segSize ? allKeys : allKeys.slice(segHead, segHead + segSize); //await debugLog(Keys);

      var p = { ...params,
        RequestItems: {
          [TableName]: {
            Keys
          },
          IndexName
        }
      };

      while (1) {
        console.log('ddbBatchGetAll', JSON.stringify(p));
        const ret = await ddb.batchGet(p).promise();
        Items = [...Items, ...ret.Responses[TableName]];
        if (!ret.UnprocessedKeys[TableName]) break;
        p.RequestItems = ret.UnprocessedKeys;
      }

      segHead += segSize;
    }
  } catch (err) {
    console.error('batchGetAll() Err', {
      TableName,
      allKeys,
      params
    });
    console.error(err);
  }

  return Items;
};
/*
partitionKeyName = :partitionkeyval AND sortKeyName = :sortkeyval
• sortKeyName = :sortkeyval
• sortKeyName < :sortkeyval
• sortKeyName <= :sortkeyval
• sortKeyName > :sortkeyval
• sortKeyName >= :sortkeyval
• sortKeyName BETWEEN :sortkeyval1 AND :sortkeyval2
• begins_with ( sortKeyName, :sortkeyval )
*/

const convertEAV = a => a.reduce((state, v, i) => v ? { ...state,
  [':v' + i]: v
} : state, {});

const convertEAN = a => a.reduce((state, k, i) => k ? { ...state,
  ['#k' + i]: k
} : state, {});

const _queryPara = (TableName, KeyConditionExpression, _ExpressionAttributeNames = [], _ExpressionAttributeValues = [], IndexName = '', params = {}) => {
  const p = { ...params,
    TableName,
    KeyConditionExpression
  };
  if (IndexName) p.IndexName = IndexName;
  if (_ExpressionAttributeNames.length) p.ExpressionAttributeNames = convertEAN(_ExpressionAttributeNames);
  if (_ExpressionAttributeValues.length) p.ExpressionAttributeValues = convertEAV(_ExpressionAttributeValues);
  return p;
};

const queryOnce = async (ddb, TableName, KeyConditionExpression, _ExpressionAttributeValues = [], IndexName = '', params = {}) => queryOnceV2(ddb, TableName, KeyConditionExpression, [], _ExpressionAttributeValues, IndexName, params);
const queryOnceV2 = async (ddb, TableName, KeyConditionExpression, _ExpressionAttributeNames = [], _ExpressionAttributeValues = [], IndexName = '', params = {}) => {
  // call ddb.query() just once and get as many as 1 query return 
  var Items = [];

  try {
    const p = _queryPara(TableName, KeyConditionExpression, _ExpressionAttributeNames, _ExpressionAttributeValues, IndexName, params);

    const ret = await ddb.query(p).promise();
    Items = ret.Items;
  } catch (e) {
    console.error('queryOnceV2() Err', {
      TableName,
      KeyConditionExpression,
      _ExpressionAttributeValues,
      IndexName,
      params
    });
    console.error(e);
  }

  return Items;
}; //aws dynamodb query \
//--table-name Thread \
//--key-condition-expression "ForumName = :fn and Subject = :sub" \
//--filter-expression "#v >= :num" \
//--expression-attribute-names '{"#v": "Views"}' \
//--expression-attribute-values file://values.json

const queryAll = async (ddb, TableName, KeyConditionExpression, _ExpressionAttributeValues = [], IndexName = '', params = {}) => queryAllV2(ddb, TableName, KeyConditionExpression, [], _ExpressionAttributeValues, IndexName, params);
const queryAllV2 = async (ddb, TableName, KeyConditionExpression, _ExpressionAttributeNames = [], _ExpressionAttributeValues = [], IndexName = '', params = {}) => {
  var Items = [];

  try {
    const p = _queryPara(TableName, KeyConditionExpression, _ExpressionAttributeNames, _ExpressionAttributeValues, IndexName, params);

    while (1) {
      //await debugLog('queryAllV2()', p);
      const ret = await ddb.query(p).promise();
      Items = [...Items, ...ret.Items];
      if (!ret.LastEvaluatedKey) break;
      p.ExclusiveStartKey = ret.LastEvaluatedKey; //loop scan with LastEvaluatedKey;
    }
  } catch (e) {
    console.error('queryOnceV2() Err', {
      TableName,
      KeyConditionExpression,
      _ExpressionAttributeNames,
      _ExpressionAttributeValues,
      IndexName,
      params
    });
    console.error(e);
  }

  return Items;
};
const queryPage = async (ddb, page, rowPerPage, stopWhenEnough, TableName, KeyConditionExpression, _ExpressionAttributeValues = [], IndexName = '', params = {}) => queryPageV2(ddb, page, rowPerPage, stopWhenEnough, TableName, KeyConditionExpression, [], _ExpressionAttributeValues, IndexName, params);
const queryPageV2 = async (ddb, page, rowPerPage, stopWhenEnough, TableName, KeyConditionExpression, _ExpressionAttributeNames = [], _ExpressionAttributeValues = [], IndexName = '', params = {}) => {
  //limit over page to max page , keep last rpp items and use real total
  //if(first page) return totalrow (page)
  //skip page*rpp, load rpp item, stopquery
  //return {(optional TotalRow:row,) Items:[...item]}
  //const stopWhenEnough = (page > 1);
  (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)({
    "*********************IN QUERY PAGE:": params
  });
  var realTotal = -1;
  var tmpTotal = 0;
  page = Math.max(1, page);
  var rpp = Math.max(1, rowPerPage);
  var toSkip = (page - 1) * rpp;
  var need = rpp; //await debugLog({page, rpp, toSkip, stopWhenEnough});

  var _Items = [];
  var lastItems = [];

  try {
    var paras = _queryPara(TableName, KeyConditionExpression, _ExpressionAttributeNames, _ExpressionAttributeValues, IndexName, params);

    (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)({
      paras
    });

    while (1) {
      //await debugLog('ddbQueryPage', JSON.stringify(p));
      (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)({
        TableName,
        KeyConditionExpression,
        _ExpressionAttributeNames,
        _ExpressionAttributeValues,
        IndexName,
        params
      });
      const {
        LastEvaluatedKey,
        Items
      } = await ddb.query(paras).promise();
      const len = Items.length;
      tmpTotal += len;

      if (need > 0) {
        lastItems = lastOfJoined(lastItems, Items, rpp);

        if (toSkip) {
          if (len > toSkip) {
            _Items = Items.slice(toSkip, toSkip + need);
            need -= _Items.length;
            toSkip = 0;
          } else {
            toSkip -= len;
          }
        } else {
          if (len > need) {
            _Items = [..._Items, ...Items.slice(0, need)];
            need = 0;
          } else {
            _Items = [..._Items, ...Items];
            need -= len;
          }
        }
      }

      if (!LastEvaluatedKey) {
        realTotal = tmpTotal;
        break; //stop because out of source
      }

      if (stopWhenEnough && need <= 0) break; //stop because got enough

      paras.ExclusiveStartKey = LastEvaluatedKey; //loop scan with LastEvaluatedKey;
    }
  } catch (e) {
    realTotal = 0;
    console.error({
      queryPage: {
        KeyConditionExpression,
        _ExpressionAttributeNames,
        _ExpressionAttributeValues,
        IndexName,
        e
      }
    });
  }

  const totalPage = realTotal >= 0 ? Math.max(1, Math.ceil(realTotal / rpp)) : -1;

  if (need > 0) {
    //fall back to last page
    const remain = realTotal % rpp;
    _Items = lastPageItems(lastItems, remain);
  }

  console.log("Result:", [_Items, realTotal, totalPage]);
  return [_Items, realTotal, totalPage];
};
const scanAll = async (ddb, TableName, params = {}) => {
  return scanN(ddb, 100000, TableName, params);
};
const scanN = async (ddb, num, TableName, params = {}) => {
  var Items = [];
  var count = 0;
  var p = {
    ConsistentRead: true,
    ...params,
    TableName,
    convertEmptyValues: true
  }; //console.error('scanN() p', p);
  //IndexName
  //ExclusiveStartKey
  //LastEvaluatedKey

  try {
    while (count < num) {
      const ret = await ddb.scan(p).promise();

      if (ret.Items) {
        count += ret.Items.length;
        Items = [...Items, ...ret.Items];
      }

      p.ExclusiveStartKey = ret.LastEvaluatedKey;
      if (!p.ExclusiveStartKey) break;
    }
  } catch (err) {
    console.error('scanN() Err', {
      TableName,
      num,
      params
    });
    console.error(err);
  }

  return Items;
};
const copyAll = async (ddb, TableName, ddbDest, TableDest) => {
  var count = 0;
  var p = {
    ConsistentRead: true,
    TableName
  };

  try {
    while (1) {
      await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('copyAll() Reading...');
      const ret = await ddb.scan(p).promise();

      if (ret.Items) {
        const Items = ret.Items;
        await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('copyAll() Writeing...', Items.length);
        if (Items.length) await batchPutAll(ddbDest, TableDest, Items);
      }

      p.ExclusiveStartKey = ret.LastEvaluatedKey;
      if (!p.ExclusiveStartKey) break;
    }
  } catch (err) {
    console.error('copyAll() Err', {
      TableName,
      TableDest
    });
    console.error(err);
  }

  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('copyAll() finished');
};
/*
export async function fetchRows(ddb, TableName, cond){
  //await debugLog('fetchRows', {TableName, cond});
  const rows = await call(ddb, 'query', {TableName, ...cond});
  //await debugLog('fetchRows', {TableName, cond}, rows);
  return rows.Items||false;
}
*/

const fetchRow = async (ddb, TableName, Key) => {
  //await debugLog({fetchRow:{TableName, Key}});
  try {
    const r = await ddb.get({
      TableName,
      Key,
      ConsistentRead: true
    }).promise();
    await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('fetchRow', {
      TableName,
      Key
    }, r);
    return r.Item || false;
  } catch (err) {
    await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_3__.debugLog)('fetchRow() Err', TableName, Key, err);
  }

  return false;
}; // Util Functions ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

const ddbNow = () => (0,_libs_libTime__WEBPACK_IMPORTED_MODULE_1__.timeStampNowGMT)();
const batchKeys = (base = {}, key = '', vals = []) => {
  return vals.map(val => ({ ...base,
    [key]: val
  }));
}; // Deplicated Function ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
//function call(ddb, action, params) { return ddb[action](params).promise(); };

const joinIds = (...args) => args.join('|');
const splitIds = str => str.split('|'); //strip empty string before write ddb, because ddb empty string

const stripEmpty = r => {
  if (!r) return r;
  const ret = {};
  Object.keys(r).forEach(key => {
    const val = r[key];
    if (val !== '') ret[key] = val;
  });
  return ret;
}; // //remove keys from ddb returned record
// export const stripKeys = r => {
//   if(!r) return 0;
//   const {ppk, psk, pk1, pk2, pk3, pk4, pk5, sk1, sk2, sk3, sk4, sk5, ...ret} = ret;
//   return ret;
// };
//from rows of items, extract val of key to array

const rows2Ids = (ary, key) => {
  var ret = {};
  ary.forEach(r => {
    const id = (0,_libs_libType__WEBPACK_IMPORTED_MODULE_2__.toStr)(r[key]).trim();
    if (id) ret[id] = 1;
  });
  return Object.keys(ret);
}; //get last n of 2 array joined

const lastOfJoined = (ary1, ary2, need) => {
  //if part 2 is enough
  const l2 = ary2.length;
  if (l2 > need) return ary2.slice(l2 - need, l2);
  if (l2 === need) return l2; //if need some or all from part 1

  const need1 = need - l2;
  const l1 = ary1.length;
  if (need1 >= l1) return ary1.concat(ary2);
  return ary1.slice(l1 - need1, l1).concat(ary2);
};

const lastPageItems = (lastItems, remain) => {
  if (remain === 0) return lastItems;
  const lenLast = lastItems.length;
  return lenLast <= remain ? lastItems : lastItems.slice(lenLast - remain, lenLast);
};
/*
usage:
    const dbc = {};//holder for cache
    ....
    const want = dbc[key] || cache(dbc, key, await fetchDDB(....));
    ....
    const wantAgain = dbc[key] || cache(dbc, key, await fetchDDB(....)); << this query will use cache without re query
*/


const cache = (dbc, key, obj) => {
  dbc[key] = obj;
  return obj;
};

/***/ }),

/***/ "../../../src/libs/libEmail.js":
/*!*************************************!*\
  !*** ../../../src/libs/libEmail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendEmail": () => (/* binding */ sendEmail),
/* harmony export */   "sendEmailTest": () => (/* binding */ sendEmailTest)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aws-cfg */ "../../../src/aws-cfg.js");


/*
aws ses --region ap-east-1 verify-email-identity --email-address emailaddress@domain

lambda requires the following access right to use ses
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": [ "ses:SendEmail", "ses:SendRawEmail" ],
        "Resource": "*"
    }]
}
*/

const setupEmailParams = params => {
  //await debugLog('setupEmailParams()', params);
  return {
    Source: params.Source,
    Destination: {
      ToAddresses: params.Destination
    },
    Message: {
      Subject: {
        Charset: params.Charset,
        Data: params.Subject
      },
      Body: {
        Text: {
          Charset: params.Charset,
          Data: params.Text
        },
        Html: {
          Charset: params.Charset,
          Data: params.Html
        }
      }
    }
  };
};

const sendEmail = params => {
  return new Promise(async (resolve, reject) => {
    const ses = await _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newSES();
    ses.sendEmail(setupEmailParams(params), (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
const sendEmailTest = async () => {
  try {
    const resp = await sendEmail({
      Source: 'konkobomaxime@gmail.com',
      Destination: ['konkobomaxime@gmail.com'],
      CharSet: 'utf-8',
      Subject: "Message from Keneya Team",
      Text: "Here is testing email from SES us-east-1",
      Html: "Here is testing email from SES us-east-1"
    }); // sender: 'konkobomaxime@gmail.com',
    // recipient: ['konkobomaxime@gmail.com'],
    // subject: 'Message from Keneya Team',
    // body: 'Here is testing email from SES(us-east-1),'
    // await debugLog("reply from sendMail: ", resp);
  } catch (err) {
    throw err;
  }
};

/***/ }),

/***/ "../../../src/libs/libFormat.js":
/*!**************************************!*\
  !*** ../../../src/libs/libFormat.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugMode": () => (/* binding */ debugMode),
/* harmony export */   "debugLog": () => (/* binding */ debugLog),
/* harmony export */   "errorLog": () => (/* binding */ errorLog),
/* harmony export */   "warnLog": () => (/* binding */ warnLog),
/* harmony export */   "infoLog": () => (/* binding */ infoLog),
/* harmony export */   "errMsgs": () => (/* binding */ errMsgs),
/* harmony export */   "errMsg": () => (/* binding */ errMsg),
/* harmony export */   "humanFileSize": () => (/* binding */ humanFileSize),
/* harmony export */   "StrShorten": () => (/* binding */ StrShorten),
/* harmony export */   "digitNum": () => (/* binding */ digitNum)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libType */ "../../../src/libs/libType.js");
/* harmony import */ var _apis_appEnv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/appEnv */ "../../../src/apis/appEnv.js");



const debugMode = async () => {
  return process.env.cfg && (0,_libType__WEBPACK_IMPORTED_MODULE_1__.toInt)(await (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_2__.getEnv)('admin_logLevel')) >= 1;
};
const debugLog = async (...t) => {
  if (process.env.cfg && (0,_libType__WEBPACK_IMPORTED_MODULE_1__.toInt)(await (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_2__.getEnv)('admin_logLevel')) < 1) return;
  return true;
}; //2020-12-01T08:07:14.085Z	07cfb56f-72f0-4390-923d-54da1d85cee1	ERROR	test error

const errorLog = (...t) => {
  console.error(...t);
}; //2020-12-01T08:07:14.085Z	07cfb56f-72f0-4390-923d-54da1d85cee1	WARN	test warn

const warnLog = (...t) => {
  console.warn(...t);
};
const infoLog = (...t) => {
  console.log(...t);
}; //String Formatting Functions
//Convert Error Object(s) or Error String(s), return (Readable Error String Array (now joined)) or (empty string)

const errMsgs = e => {
  if (Array.isArray(e)) {
    var ret = [];
    e.forEach(e1 => {
      const et1 = errMsgs(e1);
      if (et1) ret.push(et1);
    });
    return ret.length ? ret.join(', ') : '';
  }

  const e1 = errMsg(e);
  return e1; //?[e1]:'';
}; //Convert Error Object or Error String to Readable Error String

const errMsg = e => {
  if (!e) return '';
  return e.message || (0,_libType__WEBPACK_IMPORTED_MODULE_1__.toStr)(e);
}; //convert byte to readable KB,MB,GB etc

const humanFileSize = s => {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (s > GB) {
    return Math.round(s * 100 / GB) / 100 + 'GB';
  } else if (s > MB) {
    return Math.round(s * 100 / MB) / 100 + 'MB';
  } else if (s > KB) {
    return Math.round(s * 100 / KB) / 100 + 'KB';
  }

  return s + 'B';
}; //Trim Long String preserver partial head [and partial tail]

const StrShorten = (n, maxLen = 40, headLen = 18, tailLen = 18, conCater = '...') => {
  const l = n.length;
  return l > maxLen ? n.substr(0, headLen) + conCater + n.substr(l - tailLen) : n;
};
const digitNum = (num, digit) => {
  const t = '' + (0,_libType__WEBPACK_IMPORTED_MODULE_1__.toInt)(num, 0);
  const l = t.length;
  return l >= digit ? t : ('0000000000' + t).substr(10 + l - digit);
};

/***/ }),

/***/ "../../../src/libs/libResponse.js":
/*!****************************************!*\
  !*** ../../../src/libs/libResponse.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiResponseUtf8": () => (/* binding */ ApiResponseUtf8),
/* harmony export */   "ApiResponseBinary": () => (/* binding */ ApiResponseBinary),
/* harmony export */   "ApiResponseDownload": () => (/* binding */ ApiResponseDownload),
/* harmony export */   "ApiSuccess": () => (/* binding */ ApiSuccess),
/* harmony export */   "ApiFailure": () => (/* binding */ ApiFailure),
/* harmony export */   "success": () => (/* binding */ success),
/* harmony export */   "failure": () => (/* binding */ failure)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const ApiResponseUtf8 = (event, body = '', code = 200, mimeType = "text/html") => ({
  response: buildResponse(event, code, body, 0, mimeType)
});
const ApiResponseBinary = (event, base64Body = '', code = 200, mimeType = 'application/octet-stream') => ({
  response: buildResponse(event, code, base64Body, 1, mimeType)
});
const ApiResponseDownload = (event, body = '', code = 200, fileName, mimeType = 'application/octet-stream', isBase64 = 1) => ({
  response: buildResponse(event, code, body, isBase64, mimeType, fileName)
});
const ApiSuccess = (event, body, code = 200) => ({
  event,
  body,
  code,
  success: 1
}
/* default mimetype json */
);
const ApiFailure = (event, body, code = 500) => ({
  event,
  body,
  code,
  success: 0
}
/* default mimetype json */
);
function success(event, body, code = 200) {
  return buildResponse(event, code, body);
}
function failure(event, body, code = 500) {
  return buildResponse(event, code, body);
}

function buildResponse(event, statusCode, body, isBase64, mimeType, fileName) {
  var orig = '*';
  if (event) if (event.headers) if (event.headers.origin) orig = event.headers.origin; //jira 204

  const {
    siteProtocol,
    deploy_cname
  } = process.env;
  const AllowOrig = deploy_cname && siteProtocol + '://' + deploy_cname || orig;
  const headers = {
    "Access-Control-Allow-Origin": AllowOrig,
    Server: 'noDisclose',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'no-store',
    //'no-cache'
    'Expect-CT': 'max-age=86400, enforce',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN'
  };
  headers['Content-Type'] = mimeType || 'application/json; charset=UTF-8';
  if (fileName) headers['Content-Disposition'] = 'attachment; filename="' + fileName + '"';
  const response = {
    statusCode,
    headers,
    body: isBase64 ? body : mimeType ? body : JSON.stringify(body)
  };
  if (isBase64) response['isBase64Encoded'] = true;
  return response;
}

/***/ }),

/***/ "../../../src/libs/libS3.js":
/*!**********************************!*\
  !*** ../../../src/libs/libS3.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fileExt": () => (/* binding */ fileExt),
/* harmony export */   "streamToBuffer": () => (/* binding */ streamToBuffer),
/* harmony export */   "S3CreateReadStream": () => (/* binding */ S3CreateReadStream),
/* harmony export */   "S3ReadFile": () => (/* binding */ S3ReadFile),
/* harmony export */   "S3DeleteObj": () => (/* binding */ S3DeleteObj),
/* harmony export */   "S3WriteBuffer": () => (/* binding */ S3WriteBuffer),
/* harmony export */   "S3WriteLargeBuffer": () => (/* binding */ S3WriteLargeBuffer),
/* harmony export */   "S3SignDownload": () => (/* binding */ S3SignDownload),
/* harmony export */   "S3SignUpload": () => (/* binding */ S3SignUpload),
/* harmony export */   "S3BucketExist": () => (/* binding */ S3BucketExist),
/* harmony export */   "S3ListObjects": () => (/* binding */ S3ListObjects),
/* harmony export */   "S3ObjectExist": () => (/* binding */ S3ObjectExist),
/* harmony export */   "s3rm": () => (/* binding */ s3rm),
/* harmony export */   "tryCopyS3Media": () => (/* binding */ tryCopyS3Media),
/* harmony export */   "tryDeleteS3Media": () => (/* binding */ tryDeleteS3Media)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream */ "stream");
/* harmony import */ var stream__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stream__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_libType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/libType */ "../../../src/libs/libType.js");
/* harmony import */ var _libs_libFormat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/libFormat */ "../../../src/libs/libFormat.js");




 // import { arrayForEachAsync } from './_libCommon';

const fileExt = n => {
  return (0,_libs_libType__WEBPACK_IMPORTED_MODULE_3__.toStr)(n).split('.').pop().trim().toLowerCase();
};
const streamToBuffer = async stream => {
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
const S3CreateReadStream = (s3, Bucket, Key) => {
  return s3.getObject({
    Bucket,
    Key
  }).createReadStream();
};
const S3ReadFile = async (s3, Bucket, Key) => {
  const resp = await s3.getObject({
    Bucket,
    Key
  }).promise();
  return resp.Body;
};
const S3DeleteObj = async (s3, Bucket, Key) => {
  if (process.env.cfg === 'offline') {
    await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)({
      Func: 'S3DeleteObj() offline',
      Bucket,
      Key
    });
    return;
  }

  if (!s3 || !Bucket || !Key) return;

  try {
    await s3.deleteObject({
      Bucket,
      Key
    }).promise();
  } catch (e) {
    console.error(e);
  }

  ;
};
const S3WriteBuffer = async (s3, Bucket, Key, bin, publicRead = 1) => {
  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)("WRITING ZIP FILE IN BUCKET");
  const ACL = 'bucket-owner-full-control';
  const params = {
    Bucket,
    Key,

    /* required */
    Body: bin,
    //Buffer.from('...') || 'STRING_VALUE' || streamObject,
    ContentType: 'binary',
    // TODO: application/octet-stream for binary
    ACL //private |  | public-read-write | authenticated-read | aws-exec-read | bucket-owner-read | ,

  };
  return s3.putObject(params).promise();
};
const S3WriteLargeBuffer = async (s3, bucket, key, bin) => {
  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)("WRITING Large ZIP FILE IN BUCKET");
  const ACL = 'bucket-owner-full-control';
  const params = {
    Bucket: bucket,
    Key: key,
    Body: bin
  };
  let options = {
    partSize: 5 * 1024 * 1024,
    queueSize: 10
  };
  let upload = await s3.upload(params, options);
  upload.on('httpUploadProgress', function (evt) {
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
}; //https://github.com/aws/aws-sdk-js/issues/2741
//https://medium.com/@tsunghualee/how-to-upload-download-file-to-aws-s3-using-pre-signed-url-e38fa11562c2

const S3SignDownload = async (s3, Bucket, Key) => {
  if (!Key) return ''; // if (process.env.cfg === 'offline') return 'write a path' + Key;

  const params = {
    Bucket,
    Key,
    Expires: 3600
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
const S3SignUpload = async (s3, Bucket, key, Fields = {}, Expires = 3600, minSize = 0, maxSize = Infinity) => {
  const exists = await S3BucketExist(s3, Bucket);
  console.log({
    s3
  });
  console.log({
    Bucket
  });

  if (!exists) {
    let thisConfig = {
      AllowedHeaders: ["*"],
      AllowedMethods: ["PUT", "POST"],
      //   AllowedOrigins:(process.env.cfg==='offline') ?['*']:[process.env.siteProtocol+'://'+process.env.deploy_cname],
      AllowedOrigins: ['*'],
      ExposeHeaders: [],
      MaxAgeSeconds: 3600
    };
    let corsRules = new Array(thisConfig);
    let temp = {
      Bucket
    };
    let corsParams = {
      Bucket,
      CORSConfiguration: {
        CORSRules: corsRules
      }
    };

    try {
      await s3.createBucket(temp).promise();
      await s3.putBucketCors(corsParams).promise();
    } catch (err) {
      console.log({
        err
      });
    }
  }

  const params = {
    Bucket,
    Expires: 3600,
    Fields: { ...Fields,
      key
    },
    Conditions: [['content-length-range', minSize, maxSize]]
  };
  return s3.createPresignedPost(params);
};
const S3BucketExist = async (s3, bucket) => {
  const options = {
    Bucket: bucket
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
const S3ListObjects = async (s3, Bucket) => {
  return s3.listObjects({
    Bucket
  }).promise();
};
const S3ObjectExist = (s3, bucket, key) => {
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
      await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)('Exception: ', error.code);
      reject(error);
    }

    ;
  });
};
const s3rm = async (s3, Bucket, filenames) => {
  let params = {
    Bucket: Bucket,
    Delete: {
      Objects: [],
      Quiet: false
    }
  };
  if (filenames.length === 0) return;
  filenames.forEach(item => {
    params.Delete.Objects.push({
      Key: item
    });
  }); //await debugLog('delete params: ', params.Delete);

  return await _s3rmdir(s3, params);
};

const _s3rmdir = async (s3, params) => {
  return new Promise((resolve, reject) => {
    s3.deleteObjects(params, (err, data) => {
      if (err) {
        (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.errorLog)(err);
        reject(err);
      } else {
        resolve(data);
      }

      ;
    });
  });
};

const tryCopyS3Media = async (s3, privateBucket, lot, file, s3Key, bucketPublic, publicRead, copied) => {
  if (!s3Key) {
    return;
  }

  const copy_source = privateBucket + "/" + lot + "/" + file;
  let params = {
    Bucket: bucketPublic,
    CopySource: copy_source,
    Key: s3Key
  };
  await s3.copyObject(params, function (err, data) {
    if (err) (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)(err, err.stack);
  });
  return '';
};
const tryDeleteS3Media = async (s3, s3Key, bucketPublic) => {
  if (!s3Key) {
    return;
  }

  let params = {
    Bucket: bucketPublic,
    Key: s3Key
  };

  try {
    await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)({
      tryDeleteS3Media: s3,
      s3Key,
      bucketPublic
    });
    await s3.deleteObject(params, function (err, data) {
      if (err) (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_4__.debugLog)(err, err.stack); //
    });
  } catch (err) {
    console.error(err);
  }

  return '';
};

/***/ }),

/***/ "../../../src/libs/libSMS.js":
/*!***********************************!*\
  !*** ../../../src/libs/libSMS.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendSMS": () => (/* binding */ sendSMS),
/* harmony export */   "sendTestSMS": () => (/* binding */ sendTestSMS)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aws-cfg */ "../../../src/aws-cfg.js");


/*
aws ses --region ap-east-1 verify-SMS-identity --SMS-address SMSaddress@domain

lambda requires the following access right to use ses
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": [ "ses:SendSMS", "ses:SendRawSMS" ],
        "Resource": "*"
    }]
}
*/

const setupSMSParams = params => {
  //await debugLog('setupSMSParams()', params);
  return {
    Source: params.Source,
    Destination: {
      ToAddresses: params.Destination
    },
    Message: {
      Subject: {
        Charset: params.Charset,
        Data: params.Subject
      },
      Body: {
        Text: {
          Charset: params.Charset,
          Data: params.Text
        },
        Html: {
          Charset: params.Charset,
          Data: params.Html
        }
      }
    }
  };
};

const sendSMS = async params => {
  const sns = await _aws_cfg__WEBPACK_IMPORTED_MODULE_1__.newSNS();
  console.log("Sending SMS ***************************");
  return new Promise(async (resolve, reject) => {
    sns.publish(params, (err, data) => {
      if (data) {
        console.log("Success");
        resolve(data);
      }

      if (err) {
        console.log("Error");
        console.log({
          err
        });
        reject(err);
      }
    }).promise();
  }).catch(er => {
    console.log({
      er
    });
  });
};
const sendTestSMS = async () => {
  try {
    let params = {
      Message: "Ceci est un message test envoye de l'equipe Keneya envoye a partir du code",
      PhoneNumber: "+22671161976",
      Subject: "Test from Keneya",
      MessageAttributes: {
        'AWS.SNS.SMS.SMSType': {
          DataType: 'String',
          StringValue: 'Promotional'
        }
      }
    };
    await sendSMS(params);
  } catch (err) {
    throw err;
  }
};

/***/ }),

/***/ "../../../src/libs/libSSM.js":
/*!***********************************!*\
  !*** ../../../src/libs/libSSM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssmGet": () => (/* binding */ ssmGet),
/* harmony export */   "ssmPut": () => (/* binding */ ssmPut)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const ssmGet = async (ssm, names = []) => {
  const limit = 10;
  const ret = {}; //await debugLog({ssmGet:names});

  for (var turn = 0; true; turn++) {
    const name10 = names.slice(turn * limit, (turn + 1) * limit); //ssm limit get 10 per turn
    //await debugLog({ssmGet10:name10});

    if (name10.length <= 0) break; //no more

    try {
      const got = await ssm.getParameters({
        Names: name10,
        WithDecryption: true
      }).promise(); //await debugLog({ssmGet:got});

      got && got.Parameters && got.Parameters.forEach(p => {
        ret[p.Name] = p.Value;
      });
    } catch (e) {
      console.error(e);
    }
  }

  return ret;
};
const ssmPut = async (ssm, Name, Value = '', Type = 'String', Overwrite = true) => {
  //Type = String | StringList | SecureString
  return ssm.putParameter({
    Name,
    Value,
    Type,
    Overwrite
  }).promise();
};

/***/ }),

/***/ "../../../src/libs/libTime.js":
/*!************************************!*\
  !*** ../../../src/libs/libTime.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeStampNowGMT": () => (/* binding */ timeStampNowGMT),
/* harmony export */   "timeStampGMTToHk": () => (/* binding */ timeStampGMTToHk),
/* harmony export */   "nowStr": () => (/* binding */ nowStr),
/* harmony export */   "formatTimeStamp": () => (/* binding */ formatTimeStamp),
/* harmony export */   "formatTimeStampHK": () => (/* binding */ formatTimeStampHK),
/* harmony export */   "formatTimeStampHKStr": () => (/* binding */ formatTimeStampHKStr),
/* harmony export */   "formatDate": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const timeStampNowGMT = () => {
  return Date.now() + new Date().getTimezoneOffset() * 60 * 1000;
};
const timeStampGMTToHk = timeStampGMT => timeStampGMT + 8 * 60 * 60 * 1000;
const nowStr = (date, format, utc) => {
  return formatDate(new Date());
};
const formatTimeStamp = (timestamp, format = 'YYMMDD-HHmmss', utc = false) => {
  return timestamp ? formatDate(new Date(timestamp), format, utc) : '(n/a)';
};
const formatTimeStampHK = (timeStampGMT, format = 'YYYY-MM-DD HH:mm:ss') => {
  return formatDate(new Date(timeStampGMTToHk(timeStampGMT)), format, false) + '+08:00';
};
const formatTimeStampHKStr = (timeStampGMT, format = 'YYYY-MM-DD HH:mm:ss') => {
  return formatDate(new Date(timeStampGMTToHk(timeStampGMT)), format, false);
};
const formatDate = (date, format = 'YYMMDD-HHmmss', utc = false) => {
  var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function ii(i, len) {
    var s = i + "";
    len = len || 2;

    while (s.length < len) s = "0" + s;

    return s;
  }

  var y = utc ? date.getUTCFullYear() : date.getFullYear();
  format = format.replace(/(^|[^\\])YYYY+/g, "$1" + y);
  format = format.replace(/(^|[^\\])YY/g, "$1" + y.toString().substr(2, 2));
  format = format.replace(/(^|[^\\])Y/g, "$1" + y);
  var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
  format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
  format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
  format = format.replace(/(^|[^\\])M/g, "$1" + M);
  var d = utc ? date.getUTCDate() : date.getDate();
  format = format.replace(/(^|[^\\])DDDD+/g, "$1" + dddd[0]);
  format = format.replace(/(^|[^\\])DDD/g, "$1" + ddd[0]);
  format = format.replace(/(^|[^\\])DD/g, "$1" + ii(d));
  format = format.replace(/(^|[^\\])D/g, "$1" + d);
  var H = utc ? date.getUTCHours() : date.getHours();
  format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
  format = format.replace(/(^|[^\\])H/g, "$1" + H);
  var h = H > 12 ? H - 12 : H === 0 ? 12 : H;
  format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
  format = format.replace(/(^|[^\\])h/g, "$1" + h);
  var m = utc ? date.getUTCMinutes() : date.getMinutes();
  format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
  format = format.replace(/(^|[^\\])m/g, "$1" + m);
  var s = utc ? date.getUTCSeconds() : date.getSeconds();
  format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
  format = format.replace(/(^|[^\\])s/g, "$1" + s);
  var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
  format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
  f = Math.round(f / 10);
  format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
  f = Math.round(f / 10);
  format = format.replace(/(^|[^\\])f/g, "$1" + f);
  var T = H < 12 ? "AM" : "PM";
  format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
  format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));
  var t = T.toLowerCase();
  format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
  format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));
  var tz = -date.getTimezoneOffset();
  var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";

  if (!utc) {
    tz = Math.abs(tz);
    var tzHrs = Math.floor(tz / 60);
    var tzMin = tz % 60;
    K += ii(tzHrs) + ":" + ii(tzMin);
  }

  format = format.replace(/(^|[^\\])K/g, "$1" + K);
  var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
  format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
  format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);
  format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
  format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);
  format = format.replace(/\\(.)/g, "$1");
  return format;
};

/***/ }),

/***/ "../../../src/libs/libType.js":
/*!************************************!*\
  !*** ../../../src/libs/libType.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryParseJson": () => (/* binding */ tryParseJson),
/* harmony export */   "toStr": () => (/* binding */ toStr),
/* harmony export */   "toStrLower": () => (/* binding */ toStrLower),
/* harmony export */   "toStrTrim": () => (/* binding */ toStrTrim),
/* harmony export */   "toStrTrimLower": () => (/* binding */ toStrTrimLower),
/* harmony export */   "isStr": () => (/* binding */ isStr),
/* harmony export */   "toInt": () => (/* binding */ toInt),
/* harmony export */   "toFloat": () => (/* binding */ toFloat)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);

const tryParseJson = json => {
  try {
    return JSON.parse(json);
  } catch (e) {}

  ;
  return false;
};
const toStr = (input, defaultValue = '') => {
  const t = typeof input;

  if (t === 'object' || t === 'function' || t === 'undefined') {
    return defaultValue;
  } else if (input === false || input === null) {
    return defaultValue;
  }

  return '' + input || defaultValue;
};
const toStrLower = (t, defaultValue = '') => toStr(t, defaultValue).toLowerCase();
const toStrTrim = (t, defaultValue = '') => toStr(t, defaultValue).trim();
const toStrTrimLower = (t, defaultValue = '') => toStr(t, defaultValue).trim().toLowerCase();
const isStr = o => typeof o === 'string' || o instanceof String;
const toInt = (input, defaultValue = 0) => {
  const p = parseInt(input, 10);
  return isNaN(p) ? defaultValue : p;
};
const toFloat = (input, defaultValue = 0) => {
  const p = parseFloat(input);
  return isNaN(p) ? defaultValue : p;
};

/***/ }),

/***/ "../../buffer-from/index.js":
/*!**********************************!*\
  !*** ../../buffer-from/index.js ***!
  \**********************************/
/***/ ((module) => {

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/array-set.js":
/*!*************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/array-set.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.ArraySet = ArraySet;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/base64-vlq.js":
/*!**************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/base64-vlq.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(/*! ./base64 */ "../../source-map-support/node_modules/source-map/lib/base64.js");

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/base64.js":
/*!**********************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/base64.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/binary-search.js":
/*!*****************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/binary-search.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/mapping-list.js":
/*!****************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/mapping-list.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.MappingList = MappingList;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/quick-sort.js":
/*!**************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/quick-sort.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.quickSort = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/source-map-consumer.js":
/*!***********************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/source-map-consumer.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");
var binarySearch = __webpack_require__(/*! ./binary-search */ "../../source-map-support/node_modules/source-map/lib/binary-search.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map-support/node_modules/source-map/lib/array-set.js").ArraySet;
var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map-support/node_modules/source-map/lib/base64-vlq.js");
var quickSort = __webpack_require__(/*! ./quick-sort */ "../../source-map-support/node_modules/source-map/lib/quick-sort.js").quickSort;

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

exports.BasicSourceMapConsumer = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

exports.IndexedSourceMapConsumer = IndexedSourceMapConsumer;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/source-map-generator.js":
/*!************************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/source-map-generator.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(/*! ./base64-vlq */ "../../source-map-support/node_modules/source-map/lib/base64-vlq.js");
var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");
var ArraySet = __webpack_require__(/*! ./array-set */ "../../source-map-support/node_modules/source-map/lib/array-set.js").ArraySet;
var MappingList = __webpack_require__(/*! ./mapping-list */ "../../source-map-support/node_modules/source-map/lib/mapping-list.js").MappingList;

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.SourceMapGenerator = SourceMapGenerator;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/source-node.js":
/*!***************************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/source-node.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = __webpack_require__(/*! ./source-map-generator */ "../../source-map-support/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
var util = __webpack_require__(/*! ./util */ "../../source-map-support/node_modules/source-map/lib/util.js");

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

exports.SourceNode = SourceNode;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/lib/util.js":
/*!********************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/lib/util.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ "../../source-map-support/node_modules/source-map/source-map.js":
/*!**********************************************************************!*\
  !*** ../../source-map-support/node_modules/source-map/source-map.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
exports.SourceMapGenerator = __webpack_require__(/*! ./lib/source-map-generator */ "../../source-map-support/node_modules/source-map/lib/source-map-generator.js").SourceMapGenerator;
exports.SourceMapConsumer = __webpack_require__(/*! ./lib/source-map-consumer */ "../../source-map-support/node_modules/source-map/lib/source-map-consumer.js").SourceMapConsumer;
exports.SourceNode = __webpack_require__(/*! ./lib/source-node */ "../../source-map-support/node_modules/source-map/lib/source-node.js").SourceNode;


/***/ }),

/***/ "../../source-map-support/register.js":
/*!********************************************!*\
  !*** ../../source-map-support/register.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./ */ "../../source-map-support/source-map-support.js").install();


/***/ }),

/***/ "../../source-map-support/source-map-support.js":
/*!******************************************************!*\
  !*** ../../source-map-support/source-map-support.js ***!
  \******************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var SourceMapConsumer = __webpack_require__(/*! source-map */ "../../source-map-support/node_modules/source-map/source-map.js").SourceMapConsumer;
var path = __webpack_require__(/*! path */ "path");

var fs;
try {
  fs = __webpack_require__(/*! fs */ "fs");
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(/*! buffer-from */ "../../buffer-from/index.js");

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(process.version) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  if (process.stderr._handle && process.stderr._handle.setBlocking) {
    process.stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  process.exit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("aws-sdk");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ../../../src/api-post.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ "../../source-map-support/register.js");
/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ddb_cardDDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ddb/cardDDB */ "../../../src/ddb/cardDDB.js");
/* harmony import */ var _libs_libDynamo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/libDynamo */ "../../../src/libs/libDynamo.js");
/* harmony import */ var _aws_cfg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aws-cfg */ "../../../src/aws-cfg.js");
/* harmony import */ var _ddb_cardDDBItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ddb/cardDDBItem */ "../../../src/ddb/cardDDBItem.js");
/* harmony import */ var _libs_libEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./libs/libEmail */ "../../../src/libs/libEmail.js");
/* harmony import */ var _libs_libSMS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs/libSMS */ "../../../src/libs/libSMS.js");
/* harmony import */ var _libs_libResponse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/libResponse */ "../../../src/libs/libResponse.js");
/* harmony import */ var _apis_appEnv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apis/appEnv */ "../../../src/apis/appEnv.js");
/* harmony import */ var _apis_apiCommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./apis/apiCommon */ "../../../src/apis/apiCommon.js");
/* harmony import */ var _libs_libFormat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./libs/libFormat */ "../../../src/libs/libFormat.js");
/* harmony import */ var _libs_libType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./libs/libType */ "../../../src/libs/libType.js");
/* harmony import */ var _apis_apiGet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./apis/apiGet */ "../../../src/apis/apiGet.js");
/* harmony import */ var _apis_apiUpdate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apis/apiUpdate */ "../../../src/apis/apiUpdate.js");














const main = async (event, context) => {
  console.log("IN MAIN FUNCTION:", process.env.cfg);
  const B = event.body;
  const E = event.isBase64Encoded;
  const body = B ? (0,_libs_libType__WEBPACK_IMPORTED_MODULE_11__.tryParseJson)(E ? Buffer.from(B, 'base64').toString('utf8') : B) || {} : {};
  const qs = event.queryStringParameters || {};
  await (0,_libs_libFormat__WEBPACK_IMPORTED_MODULE_10__.debugLog)({
    qs
  });
  const request = { ...qs,
    ...body,
    act: event.pathParameters.proxy
  };
  return await mainWithSession(event, context, request);
};

const mainWithSession = async (event, context, request) => {
  //const body = event.body?JSON.parse(event.body):{};
  //const qs = event.queryStringParameters||{};
  //const request = {...qs, ...body};
  // console.log({request});
  console.log("mainWithSession");
  const noServe = (0,_libs_libType__WEBPACK_IMPORTED_MODULE_11__.toStrTrimLower)(await (0,_apis_appEnv__WEBPACK_IMPORTED_MODULE_8__.getEnv)('admin_maintenanceMode')) === 'true';

  if (noServe) {
    console.log('todo should not serve user APIs (forceLogout and return errMainMode');
  }

  ;
  const act = (0,_libs_libType__WEBPACK_IMPORTED_MODULE_11__.toStr)(request.act);
  const ddb = _aws_cfg__WEBPACK_IMPORTED_MODULE_3__.newDynamo();
  const apiMap = apiMapSignedIn;
  const fun = act && apiMap[act]; // console.log({act, apiMap, fun});

  if (fun) return await fun(event, context, request, ddb);
};

const apiMapSignedIn = {
  'test': _apis_apiGet__WEBPACK_IMPORTED_MODULE_12__.apiTest,
  'test2': _apis_apiGet__WEBPACK_IMPORTED_MODULE_12__.apiTest2,
  'patient/add': _apis_apiUpdate__WEBPACK_IMPORTED_MODULE_13__.apiUpdateUserPatient,
  'patients/all': _apis_apiGet__WEBPACK_IMPORTED_MODULE_12__.apiGetAllPatients
};
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=api-post.js.map