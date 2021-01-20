//db connection
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')
const conxnURL = dbConfig.conxnURL + '/' + dbConfig.dbName

mongoose.connect(conxnURL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
},function(err,db){
    if(err){
        console.log('db connection failed')
    }else{
         console.log('db connection successful')
    }
})
