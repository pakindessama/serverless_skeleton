export const main = async(event, context) => {
    const act = ''+(event && event.act);
    let api = event.pathParameters?.proxy || '';
    let qs = event.queryStringParameters || {};
    console.log({act});
    api = test(api);
    console.log({api});
    console.log({qs});
    const response = {
        statusCode: 200,
        body: JSON.stringify({"test":"GET"})
    };
    return response;
};

export const test = (val) => {
  return val.toUpperCase();
};
