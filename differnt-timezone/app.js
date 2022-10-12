const express = require('express');
const app = express();

app.get('/',(req ,res) =>{
    function calcTime(city ,offset) {
        d = new Date();
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        const nd = new Date(utc + (3600000*offset));
        return `The local time in ${city} is ${nd.toLocaleString()}`;
    }

    cityTime = {
        Mumbai:calcTime("Mumbai", +5.5),
        London:calcTime("London", 0),
        Tokyo :calcTime("Tokyo", +9),
        LasVegas: calcTime("Las Vegas", -7),
        Shanghai: calcTime("Shanghai", +8)
    }

    console.log(cityTime.Mumbai)
    res.json(cityTime)
   
})

app.listen(9000,()=>{
    console.log('listening on 9000')
})