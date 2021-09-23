import { batchGetAll, batchKeys, deleteItem, fetchRow, joinIds, putItem, queryAll, queryPage } from '../libs/libDynamo';
import { toStr } from '../libs/libType';
import { CodeVaccineCountry, dataTable } from './cardDDB';


export const fetchAllVaccineCountries = async(ddb, table, p = 1, rpp=1) => { 
    return queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0',
    [CodeVaccineCountry]);
};

export const fetchVaccineCountryBySks = async(ddb, itemSKs, table) => {
    const Keys = batchKeys({ppk:CodeVaccineCountry}, 'psk', itemSKs);
    return batchGetAll(ddb, table||dataTable, Keys);
};

export const fetchVaccineCountryBySK = async(ddb, itemId, table) => {
    return fetchRow(ddb, table||dataTable, {psk:itemId, ppk:CodeVaccineCountry});
};

export const fetchVaccineCountryByCountry = async(ddb, countryId, table) => (
    queryAll(ddb, table||dataTable, 'pk3=:v0 and sk3=:v1', [CodeVaccineCountry, toStr(countryId)], 'GSI3', {})
  );

// Modified function 
export const addVaccineCountry = async (ddb, r, table) => {
    let item = {...r, code:CodeVaccineCountry};
    item.ppk = CodeVaccineCountry;
    item.psk = joinIds(r.idvaccin, r.idpays, r.ageadministration);
    item.pk2 = CodeVaccineCountry;
    item.sk2 = r.idvaccin;
    item.pk3 = CodeVaccineCountry;
    item.sk3 = r.idpays;
    item.pk4 = CodeVaccineCountry;
    item.sk4 = r.ageadministration;
    return await putItem(ddb, table||dataTable, item);
};

export const deleteVaccineCountry = async (ddb, r, table) => {
    let item = {};
    item.psk = r.psk;
    item.ppk = r.ppk;
    await deleteItem(ddb, table||dataTable, item);
};
