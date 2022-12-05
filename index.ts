import express from 'express'
import { fetchByKey } from './read';
var app = express();

app.get('/:key', async function (req, res) {
    let key=req.params.key;
   
   let data=await fetchByKey(key)
   res.send(JSON.stringify(data))
})

var server = app.listen(8081, function () {   
   console.log("Example app listening at "+8081)
})