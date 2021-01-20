module.exports= function(req,res,next){
    if(req.query.admin){
        next()
    }else{
        next('no query of admin')
    }
}