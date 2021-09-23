import { addCountry } from '../ddb/cardDDBCountry';
import { addPatient } from '../ddb/cardDDBPatient';
import { addVaccine, fetchVaccineBySK } from '../ddb/cardDDBVaccine';
import { addVaccineCountry } from '../ddb/cardDDBVaccineCountry';
import { csvStr2Rows, rows2Json } from '../libs/libCSVReader';
import { toStr } from '../libs/libType';
import * as util from '../libs/_libCommon';

export const apiDownloadCountryVaccines = () => {

};

export const apiDownloadDailyAppointments = () => {

};

export const apiDownloadPatients = () => {

};

export const apiDownloadUsers = () => {

};

export const apiUpload = async(event, context, request, ddb) => {
    
    const ret = {};
    const type = request.type;
    const file = request.file;
    const b64 = toStr(file);
    const bin = Buffer.from(b64, 'base64');
    const csvStr = bin.toString('utf8');
    const rows = await csvStr2Rows(csvStr);
    const items = await rows2Json(rows, type);
    if(type === 'vaccine')
        await uploadVaccine(ddb, items);
    if(type === 'country')
        await uploadCountries(ddb, items);
    if(type === 'vaccinecountry')
        await uploadVaccineCountries(ddb, items);
   
    return util.ApiSuccess(event, ret);
};

export const uploadVaccine = async(ddb, vaccines) => {
    for(let i = 0; i<vaccines.length; i++){
        let item = vaccines[i];
        await addVaccine(ddb, item);
    }
    return true;
};

export const uploadCountries = async(ddb, countries) => {
    for(let i = 0; i<countries.length; i++){
        console.log({i});
        let item = countries[i];
        console.log({item});
        await addCountry(ddb, item);
    }
    return true;
};

export const uploadVaccineCountries = async(ddb, vaccines) => {
    for(let i = 0; i<vaccines.length; i++){
        console.log({i});
        let item = vaccines[i];
        const vaccine = await fetchVaccineBySK(ddb, item.idvaccin);
        console.log({vaccine});
        item.libellevaccin = vaccine.libelle;
        await addVaccineCountry(ddb, item);
    }
    // return true;
};