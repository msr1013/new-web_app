const http = require('http')
const fileOP = require('./fileOperation.js')

const server = http.createServer(function(request,response){

    console.log('client connected to server')
    // console.log('request url',request.url)
    // console.log('request method',request.method)

//     if(request.url === '/write'){
//        fileOP.writefile('manish_node.txt','welcome to nodejs')
//         .then(function(done){
//             response.end('file writing success'+ done)
//         })
//         .catch(function(err){
//              response.end('file writing failed'+ err)
//         })
//     }
//     else if(request.url === '/read'){
//         fileOP.readfile('manish_node.txt')
//     .then(function(contents) {
//         response.end('file reading success '+ contents)
//     })
//     .catch(function (err){
//         response.end('error in file reading',err)
//     })

//     }
//     else if(request.url === '/rename'){
//         fileOP.renamefile('olddate.txt','changedate.txt')
//     .then(function(changes) {
//         response.end('file renaming success '+ changes)
//     })
//     .catch(function (err){
//         response.end('error in file renaming',err)
//     })
//     }
//     else{
//         response.end('no any action to perform')
//     }
    
  
const urlArray = request.url.split('/')
const fileOperation = urlArray[1]
const fileName = urlArray[2]
const fileContent = urlArray[3]
//const newFileName= urlArray[4]

switch (fileOperation){
    case 'write':
        fileOP.writefile(fileName,fileContent)
            .then(data => response.end('file written successfully'))
            .catch(err => response.end('file writing failed'))
        break
    
}
})

server.listen(8080,function(err,done){
    if(err){
        console.log('server listening failed',err)
    }else{
        console.log('server listening at port 8080')
        console.log('ctrl+c to exit ')
    }
})

