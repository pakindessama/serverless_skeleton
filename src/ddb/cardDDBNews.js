import * as cfg from '../aws-cfg';
import * as DDB from '../libs/libDynamo';
import { CodeItem, dataTable } from './cardDDB';
import {debugLog} from '../libs/libFormat';
import {fileExt, S3DeleteObj} from '../libs/libS3';


export const fetchAllItems = async(ddb, table, p = 1, rpp=1) => { 
    return DDB.queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0',
    [CodeItem]);
};


export const fetchItemsBySks = async(ddb, itemSKs, table) => {
    const Keys = DDB.batchKeys({ppk:CodeItem}, 'psk', itemSKs);
    return DDB.batchGetAll(ddb, table||dataTable, Keys);
};
export const fetchItemBySK = async(ddb, itemId, table) => {
    return DDB.fetchRow(ddb, table||dataTable, {psk:itemId, ppk:CodeItem});
};

// Modified function 
export const addItem = async (ddb, r, table) => {
    let item = {...r, code:CodeItem};
    item.ppk = CodeItem;
    item.psk = r.title;
    return DDB.putItem(ddb, table||dataTable, item);
};

export const deleteItem = async (ddb, r, table) => {
    let item = {};
    item.psk = r.title;
    item.ppk = CodeItem;
    await DDB.deleteItem(ddb, table||dataTable, item);
};
