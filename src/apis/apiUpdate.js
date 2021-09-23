import * as util from '../libs/_libCommon';
import { addPatient, deletePatient } from "../ddb/cardDDBPatient";
import { addVaccinePatient } from '../ddb/cardDDBVaccinePatient';

export const apiUpdateUserPatient = async (event, context, request, ddb)  => {
    const item = request.patient;
    console.log({request});
    item.userId = 'max';
    await addPatient(ddb, item);    
    return util.ApiSuccess(event, item);
};

export const apiUpdateVaccinePatient = async (event, context, request, ddb)  => {
    const patient = request.item;
    patient.userId = 'max';
    await addVaccinePatient(ddb, patient);    
    return util.ApiSuccess(event, {patient});
};

export const apiDeleteUserPatient = async (event, context, request, ddb)  => {
    const item = request.item;
    item.userId = 'max';
    await deletePatient(ddb, item);    
    return util.ApiSuccess(event, item);
};

export const apiUpdatePatientVaccine = () => {

};

