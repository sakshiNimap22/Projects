const express = require('express');
const app =  express();
const cron = require ('node-cron');
const moment = require('moment');

app.get('/',function(req, res){
  res.send('api runing on ')
})

app.listen(8000, () =>{
    console.log('app listen on 8000')
})

cron.schedule('0 8 26 jan  * ',() =>{
   console.log("every 15 aug only ",moment().format('dd mm yyy  hh:mm:ss'))
},{
    timezone:'asia/kolkata'
})

