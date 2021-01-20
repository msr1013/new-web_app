

// const fs = require('fs');
 
// function write(filename,fileContent){
//     return new Promise(function(resolve,reject){

    
//  fs.writeFile('./files/test.js','welcome to js',function(err,done){
//      if(err){
//          reject(err)
//      }
//      else{
//          resolve(done)
//      }
//  })
// })
// }

// write('a.txt','b')
// .then(function(data){
//     console.log('success',data)
// })
// .catch(function(err){
//     console.log('error',err)
// })

const fs  = require('fs')

function writefile(filename,content){
    return new Promise((resolve,reject)=> {
        fs.writeFile(filename,content,'utf-8',(err,data) => {
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}

function readfile(filename) {
    
    return new Promise(function(resolve, reject)  {
        fs.readFile(filename,'utf8',(err,data) => {
            if(err){
               return reject(err)
            }
             resolve(data);
        })
    })
}



function renamefile(filename,newname) {
    return new Promise((resolve, reject) => {
        fs.rename(filename,newname,(err,data) => {
            if(err){
               return reject(err)
            
            }
            resolve(data)
            
        });
    });
}

module.exports={writefile,readfile,renamefile}