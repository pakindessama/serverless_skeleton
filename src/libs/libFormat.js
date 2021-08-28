import {toStr, toInt} from './libType';
import { getEnv } from '../apis/appEnv';

export const debugMode = async () => {
    return (process.env.cfg && (toInt(await getEnv('admin_logLevel')) >= 1));
};
export const debugLog = async (...t) => {
    if(process.env.cfg && (toInt(await getEnv('admin_logLevel')) < 1)) return;
    return true;
};


//2020-12-01T08:07:14.085Z	07cfb56f-72f0-4390-923d-54da1d85cee1	ERROR	test error
export const errorLog = (...t) => {
    console.error(...t);
};
//2020-12-01T08:07:14.085Z	07cfb56f-72f0-4390-923d-54da1d85cee1	WARN	test warn
export const warnLog = (...t) => {
    console.warn(...t);
};
export const infoLog = (...t) => {
    console.log(...t);
};

//String Formatting Functions
//Convert Error Object(s) or Error String(s), return (Readable Error String Array (now joined)) or (empty string)
export const errMsgs = (e) => {
    if(Array.isArray(e)){
        var ret = [];
        e.forEach( e1 => {
            const et1 = errMsgs(e1);
            if(et1) ret.push(et1);
        });
        return ret.length?ret.join(', '):'';
    }
    const e1 = errMsg(e);
    return e1;//?[e1]:'';
};
//Convert Error Object or Error String to Readable Error String
export const errMsg = (e) => {
    if(!e)
        return '';
    return e.message || toStr(e);
};

//convert byte to readable KB,MB,GB etc
export const humanFileSize = (s) => {
    const KB = 1024; const MB = KB*1024; const GB = MB*1024;
    if(s > GB){
        return Math.round(s * 100 / GB) / 100 +'GB';
    }else if(s > MB){
        return Math.round(s * 100 / MB) / 100 +'MB';
    }else if(s > KB){
        return Math.round(s * 100 / KB) / 100 +'KB';
    }
    return s+'B';
};

//Trim Long String preserver partial head [and partial tail]
export const StrShorten = (n, maxLen=40, headLen=18, tailLen=18, conCater='...') => {
    const l = n.length;
    return l > maxLen?(n.substr(0, headLen) + conCater + n.substr(l-tailLen)):n;
};

export const digitNum = (num, digit) => {
    const t = ''+toInt(num, 0);
    const l = t.length;
    return (l >= digit)?t:('0000000000'+t).substr(10 + l - digit);
};
