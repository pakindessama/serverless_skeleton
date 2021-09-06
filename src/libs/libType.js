export const tryParseJson = (json) => { try{ return JSON.parse(json); }catch(e){}; return false; };

export const toStr = (input, defaultValue = '') => {
    const t = (typeof input);
    if(t === 'object' || t === 'function' || t === 'undefined'){
        return defaultValue;
    }else if(input === false || input === null){
        return defaultValue;
    }
    return (''+input) || defaultValue;
};
export const toStrLower = (t, defaultValue = '') => toStr(t, defaultValue).toLowerCase();
export const toStrTrim = (t, defaultValue = '') => toStr(t, defaultValue).trim();
export const toStrTrimLower = (t, defaultValue = '') => toStr(t, defaultValue).trim().toLowerCase();
export const isStr = (o) => (((typeof o) === 'string') || (o instanceof String));

export const toInt = (input, defaultValue = 0) => {
    const p = parseInt(input, 10);
    return isNaN(p)?defaultValue:p;
};
export const toFloat = (input, defaultValue = 0) => {
    const p = parseFloat(input);
    return isNaN(p)?defaultValue:p;
};

