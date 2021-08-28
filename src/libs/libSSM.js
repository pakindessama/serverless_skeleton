export const ssmGet = async (ssm, names = []) => {
    const limit = 10;
    const ret = {};
    //await debugLog({ssmGet:names});
    for(var turn = 0; true; turn++){
        const name10 = names.slice(turn * limit, (turn + 1) * limit); //ssm limit get 10 per turn
        //await debugLog({ssmGet10:name10});
        if(name10.length <= 0) break; //no more
        try{
            const got = await ssm.getParameters({
                Names: name10,
                WithDecryption: true,
            }).promise();
            //await debugLog({ssmGet:got});
            got && got.Parameters && got.Parameters.forEach(p => {
                ret[p.Name] = p.Value;
            });
        }catch(e) { console.error(e); }
    }
    return ret;
};

export const ssmPut = async (ssm, Name, Value='', Type='String', Overwrite=true) => {
    //Type = String | StringList | SecureString
    return ssm.putParameter({ Name, Value, Type, Overwrite, }).promise();
};

