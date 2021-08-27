```
npm install -g serverless
sls dynamodb install
sls offline start


npm install --save-dev serverless-dynamodb-local
npm install -g dynamodb-admin

sls dynamodb start --migrate


# For Windows:
set DYNAMO_ENDPOINT=http://localhost:8000
dynamodb-admin

# For Mac/Linux:
DYNAMO_ENDPOINT=http://localhost:8000 dynamodb-admin



```
Steps for the first run
```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb

aws dynamodb list-tables --endpoint-url http://localhost:8000


npm install
npm run installdb
npm run runOffline


```
Restart only need run
```
npm run runOffline
```


# Serverless skeleton

Serverless service which provides a basic scaffold.

## Installation

Make sure that you use Serverless v1.

1. Run `serverless install --url https://github.com/pmuens/serverless-crud` to install the service in your current working directory
2. Next up cd into the service with `cd serverless-crud`
3. Run `npm install`
4. Deploy with `serverless deploy`


## AWS services used

- Lambda
- API Gateway
- DynamoDB
