const express = require('express')
const fileOP = require('./fileOperation.js')

const app = express();

app.get('/home',function(req,res){
    //res.end('hello from server')
    res.sendStatus(400)
    // res.json({
    //     msg:'welcome to express',
    //     text:'hi',
    //     status:'hello'
    // })
})

// app.get('/write/:fileName/:content',function(req,res){
//     // res.json({
//     //     msg:'from write endpoint',
//     //     parameters:req.params,
//     //     queries:req.query
//      var fileName  = req.params.fileName
//      var content = req.params.content
//      fileOP.writefile(fileName,content)
//         .then(function(data){
//             res.json({
//                 name:'writing from express browser successful',
//                 data:data
//             })
//         })
//         .catch(function(err){
//             res.json({
//                 text:'errro in writing',
//                 error:err
//             })
//         })
//     // })
// })
app.get('/write/:fileName/:content',function(req,res){
    // res.json({
    //     msg:'from write endpoint',
    //     parameters:req.params,
    //     queries:req.query
     var fileName  = req.params.fileName
     var content = req.params.content
     fileOP.writefile(fileName,content)
        .then(function(data){
            res.json({
                name:'writing from express browser successful',
                data:data
            })
        })
        .catch(function(err){
            res.json({
                text:'errro in writing',
                error:err
            })
        })
    // })
})

app.get('/read/:filenAme',function(req,res){

    var filenAme=req.params.filenAme
    var contents=req.params.contents
    fileOP.readfile(filenAme,contents)
        .then(function(data){
            res.json({
                name:'reading from express browser successful',
                datafromfile:data
            })
        })
})

app.get('/rename/:filename1/:filename2',function(request,response){
    var file1=request.params.filename1
    var file2=request.params.filename2
    fileOP.renamefile(file1,file2)
        .then(function(data){
            response.json({
                file:'name changed',
                dataIs:data
            })
        })
})

app.get('/help',function(req,res){
    res.send('from help ')
})

app.post('/login',function(req,res){

})

app.get('/login',function(req,res){

})

app.listen(9000,function(err,done){
    if(err){
        console.log('server listening failed')
    }else{
        console.log('server listening at port 9000')
        console.log('press ctrl+c')
    }
})

// //app.use is configuration block of middleware
// app.use(function(req,res,next){
//     //middleware
// })