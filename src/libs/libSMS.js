import * as awsCfg from '../aws-cfg';
/*
aws ses --region ap-east-1 verify-SMS-identity --SMS-address SMSaddress@domain

lambda requires the following access right to use ses
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": [ "ses:SendSMS", "ses:SendRawSMS" ],
        "Resource": "*"
    }]
}
*/
const setupSMSParams = (params) => {
    //await debugLog('setupSMSParams()', params);
    return {
        Source: params.Source,
        Destination: { ToAddresses: params.Destination },
        Message: {
            Subject: {Charset: params.Charset, Data: params.Subject},
            Body: {
                Text: {Charset: params.Charset, Data: params.Text},
                Html: {Charset: params.Charset, Data: params.Html}
            }
        },
    };
};
export const sendSMS = async(params) => {
    const sns = await awsCfg.newSNS();
    console.log("Sending SMS ***************************");

    return new Promise( async (resolve, reject) => {       
        sns.publish(params, (err, data) => { 
            if(data){
                console.log("Success");
                resolve(data);
            }
            if(err){
                console.log("Error");
                console.log({err});
                reject(err);
            }
        }).promise();
    }).catch((er) => {
        console.log({er});
    });
};

export const sendTestSMS = async () => {
    try {
        let params = {
            Message: "Ceci est un message test envoye de l'equipe Keneya envoye a partir du code",
            PhoneNumber: "+22671161976",
            Subject: "Test from Keneya",
            MessageAttributes: {
                'AWS.SNS.SMS.SMSType' : {
                    DataType: 'String',
                    StringValue: 'Promotional'
                }
            } 
        };
        await sendSMS(params);
    } catch(err) {
        throw err;
    }
};


