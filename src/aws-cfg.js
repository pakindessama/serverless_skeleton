import AWS from "aws-sdk";
import http from "http";
import {getEnvs} from './apis/appEnv';
  
export const baseCfg = () => {
    const cfg = { region: process.env.awsRegion,entrypoint:"localhost:8000"};
    if(process.env.awsAccessKeyId) cfg.accessKeyId = process.env.awsAccessKeyId;
    return cfg;
};
AWS.config.update(baseCfg());

export const newSES = async () => {
    const {notification_sesRegion} = await getEnvs(
        ['notification_sesRegion' ]);
    const sesCfg = {
        region: notification_sesRegion,
    };
    return new AWS.SES(sesCfg);
};

export const newSSM = (extraCfg={}) => (new AWS.SSM({
    ...baseCfg(), ...extraCfg
})); 

export const newLambda = () => {
    return (process.env.cfg === 'offline')?
    new AWS.Lambda({
        apiVersion: '2020',
        endpoint: process.env.awsLambdaEndpoint,
        httpOptions: {agent: new http.Agent({})}
    }):
    new AWS.Lambda({
        apiVersion: '2020',
        endpoint: process.env.awsLambdaEndpoint,
        httpOptions: {
            timeout: 30000,
            connectTimeout: 5000
        }
    });
};

export const newS3 = () => (new AWS.S3({
    ...baseCfg(),
    apiVersion: '2006-03-01',
}));
export const newDynamo = () => {
    const {dynamoRegion, dynamoHost} = process.env;
    if(dynamoRegion && dynamoHost){
        const ddbCfg = { region:dynamoRegion,
            endpoint:new AWS.Endpoint(dynamoHost),
            convertEmptyValues: true,
            httpOptions: {agent: new http.Agent({})}};
        return new AWS.DynamoDB.DocumentClient(ddbCfg);
    }
    return new AWS.DynamoDB.DocumentClient({
        ...baseCfg(),
        convertEmptyValues: true,
    });
};

export const newCloudWatchLogs = () => {
    return new AWS.CloudWatchLogs();
};

export const newSNS = async () => {
    return new AWS.SNS();
};

export const newDynamoBackup = () => {
    return new AWS.DynamoDB();
};
