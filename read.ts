import AWS from 'aws-sdk';
import { awsConfig } from './config/aws-config';

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
