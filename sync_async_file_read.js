//  var fs = require('fs')
// var timestamp = new Date().toString()
// var contents;

// fs.writeFileSync('date.txt',timestamp)
// contents = fs.readFileSync('date.txt')
// console.log('checking the contents')

// console.assert(contents == timestamp)

// console.log(' i am last line of the script')

// fs.readFile('input.txt', function (err, data) {
//     if (err) 
//         return console.error(err);
//     else
//         fs.writeFile('output.txt', function(err, data) {
//             if(err)
//                 return console.error(err);
//             else
//                 fs.readFile('new.txt', function(err, data) {
//                     if(err)
//                         return console.error(err);
//                     else
//                         console.log(data.toString());});
//  console.log("That's a Callback Hell")
// })
// })

// const p = new Promise((resolve,reject) => {
//     resolve('promise resolved')
// })
// p.then(result => console.log(result))
// const p = new Promise((resolve,reject)=>{
//     reject('err .. error')
// })
// p.catch(err=>console.log(err.message))

///////////////////////////////////


var fs  = require('fs')

function writefile(filename,content){
    return new Promise((resolve,reject)=> {
        fs.writeFile(filename,content,'utf-8',(err,data) => {
            if(err){
                reject('error found',err)
                return
            }
            resolve(data)
        })
    })
}

function readfile(filename) {
    
    return new Promise(function(resolve, reject)  {
        fs.readFile(filename,'utf8',(err,data) => {
            
             resolve(data);
        })
    })
}



function renamefile2(filename,newname) {
    return new Promise((resolve, reject) => {
        fs.rename(filename,newname,(err,data) => {
            if(err){
                reject('error in renaming')
            
            }
            resolve('successful rename ')
            
        });
    });
}

writefile('input.txt','write and read something from input.txt file')
    .then(function(success){
        console.log(success)
    })
    .catch(function(err){
        console.log('failure',err)
    })

readfile('input.txt')
    .then(function(contents) {
        console.log(contents)
        
    })


renamefile2('newdate.txt','olddate.txt')
    .then(function(success){
        console.log(success)
    })
    .catch((err) =>{
        console.log(err)
    })

