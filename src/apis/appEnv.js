import {timeStampNowGMT} from '../libs/libTime';
import {ssmGet} from '../libs/libSSM';
import {newSSM} from '../aws-cfg';

const ssmSite = 'oupc-chi-classic';

let __ssm = 0;
const getSSM = () => {
  if(!__ssm) __ssm = newSSM();
  return __ssm;
};

let __ssmExpire = 0;
let __envCache = {}; 

const ssmCheckExpire = () => { 
  const ts = timeStampNowGMT();
  if(ts > __ssmExpire){
    __ssmExpire = ts + 180000;
    __envCache = {};
  }
};

export const getEnv = async (name,  _stage = '') => {
  ssmCheckExpire();
  await getEnvs([name], _stage);
  return __envCache[name];
};

export const nameSsm2Env = (n) => (n.split('/').slice(3).join("_"));
export const nameEnv2Ssm = (stage, n) => '/'+ssmSite+'/'+stage+'/'+n.replace(/_/g, '/');
export const getEnvs = async (envNames = [], _stage = '') => {

  //await debugLogX({getEnv: envNames});
  ssmCheckExpire();

  // load cache missing 
  const stage = (_stage || process.env.cfg);
  const cacheKeys = Object.keys(__envCache);
  if(stage !== 'offline'){
    const gets = [];
    envNames.forEach(n => { if (cacheKeys.indexOf(n) < 0) gets.push(nameEnv2Ssm(stage, n)); });
    const vals = await ssmGet(getSSM(), gets);
    Object.keys(vals).forEach( key => { __envCache[nameSsm2Env(key)] = vals[key]; } );
  }

  const ret = {};
  envNames.forEach(n => { 
    if(!__envCache[n]) __envCache[n] = process.env[n]; //fallback to env
    ret[n] = __envCache[n]; 
  });
  return ret;
};