
// const fs = require('fs')


// const fileOP =require('./fileOperation')

// fileOP('manish.txt','welcome to express')
// .then(function(done){
//     console.log('done')

// })
// .catch(function(err){
//     console.log('err')
// })

const fileOP = require('./fileOperation')

fileOP.writefile('input.txt','write and read something from input.txt file')
    .then(function(success){
        console.log('successs in writitng',success)
    })
    .catch(function(err){
        console.log('failure',err)
    })

fileOP.readfile('input.txt')
    .then(function(contents) {
        console.log(contents)
        
    })


fileOP.renamefile('newdate.txt','olddate.txt')
    .then(function(success){
        console.log(success)
    })
    .catch((err) =>{
        console.log('error in renaming',err)
    })

