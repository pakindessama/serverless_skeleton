import { batchGetAll, batchKeys, fetchRow, putItem, queryPage } from '../libs/libDynamo';
import { CodeCountry, dataTable } from './cardDDB';


export const fetchAllCountries = async(ddb, table, p = 1, rpp=10) => { 
    return queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0',
    [CodeCountry]);
};

export const fetchCountryBySks = async(ddb, itemSKs, table) => {
    const Keys = batchKeys({ppk:CodeCountry}, 'psk', itemSKs);
    return batchGetAll(ddb, table||dataTable, Keys);
};

export const fetchCountryBySK = async(ddb, itemId, table) => {
    return fetchRow(ddb, table||dataTable, {psk:itemId, ppk:CodeCountry});
};

// Modified function 
export const addCountry = async (ddb, r, table) => {
    let item = {...r, code:CodeCountry};
    item.ppk = CodeCountry;
    item.psk = r.idpays;
    console.log({item});
    return putItem(ddb, table||dataTable, item);
};

export const deleteCountry = async (ddb, r, table) => {
    let item = {};
    item.psk = r.psk;
    item.ppk = r.ppk;
    await deleteItem(ddb, table||dataTable, item);
};
