const express = require('express');
const cluster  =  require ('cluster');
const os  = require ('os')

const app = express();
const numCpu =  os.cpus().length

app.get('/', (req ,res) =>{
 for(let i = 0 ;  i < 10 ; i++){

 }
 res.send(`ok ${process.pid}`);
})

if(cluster.isMaster){
    for(let i = 0 ; i < numCpu ; i++){
     cluster.fork()
    }
    cluster.on('exit',(worker ,code ,signal) =>{
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork()
    })
}else{
app.listen(4000 , ()=> console.log(`server ${process.pid} @ http://localhost:4000`))
}

//app.listen(4000 , ()=> console.log(`server ${process.pid} @ http://localhost:4000`))



//* promises 

