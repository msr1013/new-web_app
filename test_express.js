console.log('server is starting')

var express = require('express');

var app = express()

var test_express = app.listen(3000,listening)

function listening(){
    console.log('listening..')
}

app.use(express.static('website'))  