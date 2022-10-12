function auth(req, res ,next ){
    const{ id }= req.query;
    if (parseInt(id) === 1) {
        next();         
    }
     res.send("access denied");
     throw new Error("access denied");
}

// app.use(auth)
function keyValuePair(req,res,next){
    req.pair = {
        key: "value"
    }
    next();
}

module.exports={
    auth, keyValuePair
}