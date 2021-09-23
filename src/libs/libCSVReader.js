
import {debugLog} from '../libs/libFormat';
import parse from 'csv-parse';
import { getDDBRows } from '../ddb/ddbRows';

//All Rows in one
export const csvStr2Rows = async (str) => {
    var rows = [];
    const cr = new CSVReader();
    cr.loadString(str);
    while(1){
        const row = await cr.getRow();
        if(row === null)
            break;
        rows.push(row);
    }
    return rows;
};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----
//Support row Stream 
export class CSVReader{
    readQueue = [];
    ended = false;
    parser = null;
    readable = false;
    loadString(srcString, delimiter = ',', escape = '"', trim = true ){
        this.parser = parse(srcString, {
            trim, // trim field string
            delimiter,
            escape,
            bom: true,
            skip_empty_lines: false,
            relax_column_count: true,
            relax_column_count_less: true,
            relax_column_count_more: true,
        })
        .on('readable', () => {
            this.readable = true;
            const q = this.readQueue.shift();
            if(q)
                this._resolveRead(q.resolve, q.reject);
        })
        .on('error', async (err) => {
            await debugLog('on error', this.readQueue.length);
            this._rejectAll(err);
        })
        .on('end', () => {
            //await debugLog('on end', this.readQueue.length);
            this._rejectAll('parse ended');
        });
    }
    async getRow(){
        return new Promise((resolve, reject) => {
            if(this.readable){
                this._resolveRead(resolve, reject);
            }else{
                this.readQueue.push({resolve, reject});
            }
        });
    }
    _resolveRead(resolve, reject){
        try{
            resolve(this.parser.read());
        }catch(err){
            reject(err);
        }
    }
    _rejectAll(err){
        this.readQueue.forEach(q => { q.reject(err); } );
    }
};


export const rows2Json = async(rows, type) => {
    const headers = getDDBRows(rows, type);
    if(!headers)
        return '';
    if(rows.length<2)
        return '';
    if(headers.length<1)
        return '';
    
    let resuts = [];
    for(let i=1; i<rows.length; i++){
        let row = rows[i];
        let temp={};
        for(let j=0; j<row.length; j++){
            temp[headers[j]]=row[j];
        }
        resuts.push(temp);
    }
    return resuts;
};