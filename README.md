# Serverless skeleton

Serverless service which provides a basic scaffold.

```
install aws-sdk from https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
```


```
Steps for the first run
```
```
npm install -g serverless
```
```
npm install
```
```
npm install -g dynamodb-admin
```
```
sls dynamodb install
```
```
sls offline start 
```
Open a new terminal and run:
```
    - sls dynamodb start --migrate
```

## AWS services used

- Lambda
- API Gateway

## How to deploy?

3 possible stages: offline, dev, uat.
The config files are in the stage folder

- npm run offline
- npm run deploydev
- npm run deployuat



DYNAMO_ENDPOINT= http://localhost:8000
API_ENDPOINT= http://localhost:4000/api