const router = require('express').Router()
const UserModel =require('./../models/user.model')
const MapUserReq = require('./../utility/map_user_request')
const Uploader = require('./../middlewares/uploader')

router.route('/')
    .get(function(req,res,next){
        const condition ={}
        UserModel
            .find(condition)
            .sort({
                _id:-1
            })
            //.limit(2)
            .exec(function(err,done){
                if(err){
                    return next(err)
                }
                res.json(done)
            })
    })
    .post(function(req,res,next){

    })
   

    

router.route('/search')
    .get(function(req,res,next){
        res.send('from user search')
    })
    .post(function(req,res,next){

    })
    
router.route('/:id')
    .get(function(req,res,next){
       UserModel
       .findById(req.params.id)
       .then(function(user){
           if(!user){
               return next({
                   msg:'user not found',
                   status:404
               })
           }
        res.json(user)
       })
       .catch(function(err){
           next(err)
       })
    })
        
    .put(Uploader.single('image'),function(req,res,next){
        const data = req.body
        if(req.fileTypeError){
            return next({
                msg:'invalid file format',
                status:400
            })
        }
        if(req.file){
            data.image=req.file.filename
        }
        UserModel.findById(req.params.id,function(err,user){
            if(err){
                return next(err)
            }
            if(!user){
                return next({
                    msg:"user not found",
                    status:404
                })
            }


            var updatedUser=MapUserReq(user,req.body)
            updatedUser.save(function(err,updated){
                if(err){
                    return next(err)
                }
                res.json(updated)
            })
        })

    })
    .delete(function(req,res,next){
       UserModel.findById(req.params.id)
       .then(function(user){
           if(user){
                user.remove(function(err,done){
                    if(err){
                        return next(err)
                    }
                    res.json(done)
                })
           }else{
               next({
                   msg:"user not found",
                   status:404
               })
           }
       })
    })



module.exports =  router