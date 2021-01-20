
const express = require('express')
const app = express();
const morgan = require('morgan')
const path = require('path')


require('./db')

const authRouter = require('./controllers/auth.controller')
const userRouter = require('./controllers/user.controller')

// console.log('__dirname',__dirname)
// console.log('process.cwd()',process.cwd())

const isAdmin = require('./middlewares/isAdmin')

app.use(express.static('uploads'));
app.use('/file',express.static(path.join(__dirname,'uploads')))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(morgan('dev'))

app.use('/auth',authRouter)
app.use('/user',userRouter)
app.use('/notification',userRouter)
app.use('/comment',userRouter)

app.use(function(req,res,next){
    next({
        msg:"Not found ",
        status:"404"
    })
})

app.use(function(err,req,res,next){
 
    res.json({
        msg:err.msg || err,
        status:err.status || 400
    })
})


app.listen(9000,function(err,done){
    if(err){
        console.log('server listening failed')
    }else{
        console.log('server listening at port 9000')
        console.log('press ctrl+c')
    }
})