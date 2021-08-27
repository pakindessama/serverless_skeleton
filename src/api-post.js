export const main = async (event, context) => {
    console.log("IN MAIN FUNCTION");
    const act = ''+(event && event.act);
    console.log({act});
    // if(act === 'warmStart')
    //   return util.ApiSuccess(event, {state:'warmStarted'});
    const response = {
        statusCode: 200,
        body: JSON.stringify({"test":"POST"})
      };
    return response;
};