import * as DDB from '../libs/libDynamo';
import { CodeNews, dataTable } from './cardDDB';

export const fetchAllItems = async(ddb, table, p = 1, rpp=1) => { 
    return DDB.queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0',
    [CodeNews]);
};


export const fetchItemsBySks = async(ddb, itemSKs, table) => {
    const Keys = DDB.batchKeys({ppk:CodeNews}, 'psk', itemSKs);
    return DDB.batchGetAll(ddb, table||dataTable, Keys);
};
export const fetchItemBySK = async(ddb, itemId, table) => {
    return DDB.fetchRow(ddb, table||dataTable, {psk:itemId, ppk:CodeNews});
};

// Modified function 
export const addItem = async (ddb, r, table) => {
    let item = {...r, code:CodeNews};
    item.ppk = CodeNews;
    item.psk = r.title;
    return DDB.putItem(ddb, table||dataTable, item);
};

export const deleteItem = async (ddb, r, table) => {
    let item = {};
    item.psk = r.psk;
    item.ppk = r.ppk;
    await DDB.deleteItem(ddb, table||dataTable, item);
};
