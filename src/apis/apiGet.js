import { fetchAllPatients } from '../ddb/cardDDBPatient';
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

export const apiGetVaccinesByCountry = (country) => {

};

export const apiGetAllPatients = async(event, context, request, ddb) => {
    const ret = {};
    ret.test="OK";
    const patients = await fetchAllPatients(ddb);
    ret.patients = patients;
    return util.ApiSuccess(event, ret);

};
