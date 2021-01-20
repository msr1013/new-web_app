const express = require('express')
const router = express.Router()
const UserModel = require('./../models/user.model')
const MapUserReq = require('./../utility/map_user_request')
const Uploader = require('./../middlewares/uploader')
const passwordHash = require('password-hash')

router.post('/login',function(req,res,next){
   UserModel
    .findOne({
       username:req.body.username
   })
   .exec(function(err,user){
       if(err){
           return next(err)
       }
       if(!user){
           return next({
               msg:"Invalid Username",
               status:400
           })
       }
       
       if(user.status === 'inActive'){
           return next({
               msg:"Your Account is disable,please contact system administrator for support",
               status:400
           })
       }
       var isMatched = passwordHash.verify(req.body.password,user.password)
       if(isMatched){
           res.json(user)
       }else{
           return next({
               msg:"invalid password",
               status:400
           })
       }
   })
})

router.post('/register', Uploader.single('image'),function(req,res,next){

    //data validation
    //library ==>nmp js 'expres validator', 'joi'
    console.log('req.body',req.body)
    console.log('req.file',req.file)
    const data=req.body
    if(req.fileTypeError){
        return next({
            msg:"invalid file format type",
            status:400
        })
    }

    if(req.file){
        //remove if use filefilter
        // var mimeType=req.file.mimetype
        // var type=mimeType.split('/')[0]
        // if(type !== 'image'){
            //todo remove file from server
            //hint use fs.unlink,path dinae remove bhaihalcha,path with req.file.filename
            //upload bhaisake pachi validation filter garne validation bahyena remove garene
            //multer way bata function typefilter
    //         return next({
    //             msg:"invalid file format",
    //             status:400
    //         })
    //     }
        data.image=req.file.filename
     }
    const newUser  = new UserModel({})

    var newMappedUser=MapUserReq(newUser,data) 

    newMappedUser.password = passwordHash.generate(req.body.password)
//   newUser.save(function(err,done){
//       if(err){
//           return next(err)
//       }
//       res.json(done)
//   })
newMappedUser
  .save()
  .then(function(data){
    res.json(data)
  })
  .catch(function(err){
      next(err)
  })
   
})

module.exports = router