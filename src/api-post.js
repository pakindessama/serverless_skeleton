import { dataTable } from './ddb/cardDDB';
import * as DDB from './libs/libDynamo';
import * as awsCfg from './aws-cfg';
import { addItem } from './ddb/cardDDBItem';
import { sendEmailTest } from './libs/libEmail';
import { sendSMS, sendSMSTest, sendTestSMS } from './libs/libSMS';
import * as util from './libs/libResponse';

export const main = async (event, context) => {
    console.log("IN MAIN FUNCTION");
    const act = ''+(event && event.act);
    console.log({act});
    // if(act === 'warmStart')
    const response = {
        statusCode: 200,
        body: JSON.stringify({"test":"POST"})
    };
    let item = {
      title: "Test"
    };
    const ddb = awsCfg.newDynamo();
    // await sendEmailTest();
    // await sendTestSMS();
    addItem(ddb, item);
    return util.ApiSuccess(event, item);
};