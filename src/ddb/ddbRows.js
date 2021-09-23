export const getDDBRows = (rows, type) => {
    const header = rows[0];
    if(type==='vaccine'){
        const equals = JSON.stringify(header)=== JSON.stringify(rawRowsVaccine);
        if(equals){
            return rowsVaccine;
        }
    }else if(type === 'country'){
        const equals = JSON.stringify(header)=== JSON.stringify(rawRowsCountries);
        if(equals){
            return rowsCountries;
        }
    }else if(type === 'vaccinecountry'){
        const equals = JSON.stringify(header)=== JSON.stringify(rawsRowsVaccineCountries);
        if(equals){
            return rowsVaccineCountries;
        }
    }
    return 0;
};


const rawRowsVaccine =  [ 'idvaccin', 'libelle', 'antigene', 'statut' ];
const rowsVaccine =  [ 'idvaccin', 'libelle', 'antigene', 'statut' ];
const rawRowsCountries =  [ 'idpays', 'libelle', 'sigle', 'indicatif' ];
const rowsCountries =  [ 'idpays', 'libelle', 'sigle', 'indicatif' ];
const rawsRowsVaccineCountries =  [ 'idvaccin', 'idpays', 'obligatoire', 'duree', 'ageadministration' ,'observation' ];
const rowsVaccineCountries =  [ 'idvaccin', 'idpays', 'obligatoire', 'duree', 'ageadministration' ,'observation' ];