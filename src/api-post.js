import { dataTable } from './ddb/cardDDB';
import * as DDB from './libs/libDynamo';
import * as awsCfg from './aws-cfg';
import { addItem } from './ddb/cardDDBItem';

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
    return addItem(ddb, item);
    return DDB.putItem(ddb, dataTable, item);
};