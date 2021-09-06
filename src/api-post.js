import { dataTable } from './ddb/cardDDB';
import * as DDB from './libs/libDynamo';
import * as awsCfg from './aws-cfg';
import { addItem } from './ddb/cardDDBItem';
import { sendEmailTest } from './libs/libEmail';
import { sendSMS, sendSMSTest, sendTestSMS } from './libs/libSMS';
import * as util from './libs/libResponse';
import { getEnv } from './apis/appEnv';
import { apiUploadMedia } from './apis/apiCommon';
import { debugLog } from './libs/libFormat';
import { toStrTrimLower, toStr, tryParseJson } from './libs/libType';
import { apiGetAllPatients, apiTest, apiTest2 } from './apis/apiGet';
import { apiUpdateUserPatient } from './apis/apiUpdate';

export const main = async (event, context) => {
    console.log("IN MAIN FUNCTION:", process.env.cfg);

    const B = event.body;
    const E = event.isBase64Encoded;
    const body = B? (tryParseJson(E?Buffer.from(B, 'base64').toString('utf8'):B)||{}): {};
    const qs = event.queryStringParameters||{};
    await debugLog({qs});
    const request = {...qs, ...body, act:event.pathParameters.proxy};
    return await mainWithSession(event, context, request);
  };

const mainWithSession = async (event, context, request) => {
  //const body = event.body?JSON.parse(event.body):{};
  //const qs = event.queryStringParameters||{};
  //const request = {...qs, ...body};
  // console.log({request});
  console.log("mainWithSession");
  const noServe = toStrTrimLower(await getEnv('admin_maintenanceMode')) === 'true';
  if(noServe){
    console.log('todo should not serve user APIs (forceLogout and return errMainMode');
  };
  const act = toStr(request.act);
  const ddb = awsCfg.newDynamo();
  const apiMap = apiMapSignedIn;
  const fun = act && apiMap[act];
  // console.log({act, apiMap, fun});
  if(fun)
    return await fun(event, context, request, ddb);
};


const apiMapSignedIn = {
  'test': apiTest,
  'test2': apiTest2,
  'patient/add': apiUpdateUserPatient,
  'patients/all': apiGetAllPatients,
};
