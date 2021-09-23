import { batchGetAll, batchKeys, deleteItem, fetchRow, putItem, queryPage } from '../libs/libDynamo';
import {CodeVaccine, dataTable } from './cardDDB';


export const fetchAllVaccines = async(ddb, table, p = 1, rpp=1) => { 
    return queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0',
    [CodeVaccine]);
};

export const fetchVaccineBySks = async(ddb, itemSKs, table) => {
    const Keys = batchKeys({ppk:CodeVaccine}, 'psk', itemSKs);
    return batchGetAll(ddb, table||dataTable, Keys);
};

export const fetchVaccineBySK = async(ddb, itemId, table) => {
    return fetchRow(ddb, table||dataTable, {psk:itemId, ppk:CodeVaccine});
};

// Modified function 
export const addVaccine = async (ddb, r, table) => {
    let item = {...r, code:CodeVaccine};
    item.ppk = CodeVaccine;
    item.psk = r.idvaccin;
    console.log({ITEM:item});
    return putItem(ddb, table||dataTable, item);
};

export const deleteVaccine = async (ddb, r, table) => {
    let item = {};
    item.psk = r.psk;
    item.ppk = r.ppk;
    await deleteItem(ddb, table||dataTable, item);
};
