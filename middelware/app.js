const express = require('express');
const app = express();
const {keyValuePair,auth }=require('./middlerware')

// // app.use(auth)

app.get("/", keyValuePair,(req,res)=>{
    console.log('home');
    console.log(req.pair);
    let { pair }= req
     res.send(pair)
})

app.get("/user", auth,(req,res)=>{
    let secret = {
        username:"vik",
        secret:"qwertyui"
    }
    res.send(secret);
})

app.listen(9000,()=>{
    console.log('listening on port 9000');
});