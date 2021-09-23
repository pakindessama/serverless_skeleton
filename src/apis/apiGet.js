import { fetchAllCountries } from '../ddb/cardDDBCountry';
import { fetchAllPatients } from '../ddb/cardDDBPatient';
import { fetchVaccineCountryByCountry } from '../ddb/cardDDBVaccineCountry';
import * as util from '../libs/_libCommon';


export const apiTest = (event, context, request, ddb) => {
    console.log({Test:request});
    const ret = {};
    ret.test="OK";
    return util.ApiSuccess(event, ret);

};

export const apiTest2 = (event, context, request, ddb) => {
    console.log({Test2:request});
    return {test:'test2'};
};


export const apiGetPatientByUser = (user) => {

};

export const apiGetVaccineByPatient = (patient) => {

};

export const apiGetNewsBy = (user) => {

};

export const apiGetVaccinesByCountry =  async(event, context, request, ddb) => {
    const countryId = request.countryId;
    const vaccines = await fetchVaccineCountryByCountry(ddb, countryId);
    return util.ApiSuccess(event, {vaccines});
};

export const apiGetAllPatients = async(event, context, request, ddb) => {
    const ret = {};
    const patients = await fetchAllPatients(ddb);
    ret.patients = patients;
    return util.ApiSuccess(event, ret);

};

export const apiGetCountries = async(event, context, request, ddb) => {
    const countries = await fetchAllCountries(ddb);
    console.log({countries});
    return util.ApiSuccess(event, {countries});
};
