import * as awsCfg from '../aws-cfg';
/*
aws ses --region ap-east-1 verify-email-identity --email-address emailaddress@domain

lambda requires the following access right to use ses
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Action": [ "ses:SendEmail", "ses:SendRawEmail" ],
        "Resource": "*"
    }]
}
*/
const setupEmailParams = (params) => {
    //await debugLog('setupEmailParams()', params);
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
export const sendEmail = (params) => {
    return new Promise( async (resolve, reject) => {
        const ses = await awsCfg.newSES();
        ses.sendEmail(setupEmailParams(params), (err, data) => {
            if (err) {
                reject(err);
            } else { 
                resolve(data);
            }
        });
    });
};

export const sendEmailTest = async () => {
    try {
        const resp = await sendEmail({
            Source: 'konkobomaxime@gmail.com',
            Destination: ['konkobomaxime@gmail.com'],
            CharSet:'utf-8',
            Subject: "Message from Keneya Team", 
            Text: "Here is testing email from SES us-east-1", Html:"Here is testing email from SES us-east-1"});

            // sender: 'konkobomaxime@gmail.com',
            // recipient: ['konkobomaxime@gmail.com'],
            // subject: 'Message from Keneya Team',
            // body: 'Here is testing email from SES(us-east-1),'
      
        // await debugLog("reply from sendMail: ", resp);
    } catch(err) {
        throw err;
    }
};
