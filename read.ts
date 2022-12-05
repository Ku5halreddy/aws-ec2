import AWS from 'aws-sdk';

let awsConfig={
    "region": "ap-south-1",
    "endpoint": "http://dynamodb.ap-south-1.amazonaws.com",
    "accessKeyId": "AKIA5UCIZXMHLJZOZ76B",
    "secretAccessKey": "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"
};

AWS.config.update( awsConfig);

let docClient=new AWS.DynamoDB.DocumentClient();

export function fetchByKey(key:string){
    var params={
    TableName:"testUser",
    Key:{
        "name": key
        }
    };

    return new Promise(async (resolve, reject)=>{
        let resp= docClient.get(params, (err,data)=>{
            if(err){
                console.log("error while fectching by key:"+JSON.stringify(err, null,2))
                throw new Error(JSON.stringify(err))
            }else{
                console.log("users data: "+JSON.stringify(data,null,2))
                resolve(data)
            }
        })
    })
}
