import * as util from '../libs/_libCommon';
import { addPatient } from "../ddb/cardDDBPatient";

export const apiUpdateUser = async (event, context, request, ddb) => {
    const patient = request.patient;
    await addPatient(db, item, table);
    return util.ApiSuccess(event, patient);
};

export const apiUpdateUserPatient = async (event, context, request, ddb)  => {
    const patient = request.patient;
    patient.userId = 'max';
    await addPatient(ddb, patient);
    return util.ApiSuccess(event, patient);
};

export const apiUpdatePatientVaccine = () => {

};

