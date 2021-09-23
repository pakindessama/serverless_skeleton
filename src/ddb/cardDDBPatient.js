import * as cfg from '../aws-cfg';
import * as DDB from '../libs/libDynamo';
import { dataTable, CodePatient } from './cardDDB';
import {debugLog} from '../libs/libFormat';
import {fileExt, S3DeleteObj} from '../libs/libS3';
import { timeStampNowGMT } from '../libs/libTime';


export const fetchAllPatients = async(ddb, table, p = 1, rpp=1) => { 
    return DDB.queryPage(ddb, p, rpp, (p!==1), dataTable, 'ppk=:v0', [CodePatient]);
};

export const fetchpatientsBySks = async(ddb, patientSKs, table) => {
    const Keys = DDB.batchKeys({ppk:CodePatient}, 'psk', patientSKs);
    return DDB.batchGetAll(ddb, table||dataTable, Keys);
};
export const fetchpatientBySK = async(ddb, patientId, table) => {
    return DDB.fetchRow(ddb, table||dataTable, {psk:patientId, ppk:CodePatient});
};

// Modified function 
export const addPatient = async (ddb, r, table) => {
    const now = timeStampNowGMT();
    const psk = DDB.joinIds(r.userId, now);
    const patient = {...r, code:CodePatient};
    patient.ppk = CodePatient;
    patient.psk = psk;
    return DDB.putItem(ddb, table||dataTable, patient);
};

export const deletePatient = async (ddb, r, table) => {
    let item = {};
    item.psk = r.psk;
    item.ppk = r.ppk;
    await DDB.deletepatient(ddb, table||dataTable, item);
};
