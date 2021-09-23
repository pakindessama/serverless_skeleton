import * as DDB from '../libs/libDynamo';
import { CodeVaccinePatient, dataTable } from './cardDDB';


export const fetchAllItems = async(ddb, table, p = 1, rpp=1) => { 
    return DDB.queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0',
    [CodeVaccinePatient]);
};

export const fetchVaccinePatientBySks = async(ddb, itemSKs, table) => {
    const Keys = DDB.batchKeys({ppk:CodeVaccinePatient}, 'psk', itemSKs);
    return DDB.batchGetAll(ddb, table||dataTable, Keys);
};

export const fetchVaccinePatientBySK = async(ddb, itemId, table) => {
    return DDB.fetchRow(ddb, table||dataTable, {psk:itemId, ppk:CodeVaccinePatient});
};

// Modified function 
export const addVaccinePatient = async (ddb, r, table) => {
    let item = {...r, code:CodeVaccinePatient};
    item.ppk = CodeVaccinePatient;
    item.psk = r.title;
    return DDB.putItem(ddb, table||dataTable, item);
};

export const deleteVaccinePatient = async (ddb, r, table) => {
    let item = {};
    item.psk = r.psk;
    item.ppk = r.ppk;
    await DDB.deleteItem(ddb, table||dataTable, item);
};
