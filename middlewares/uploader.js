const multer = require('multer')
const path=require('path')
// const upload =multer({
//     dest:'uploads/'
// })

function typeFilter(req,file,cb){
    var mimeType = file.mimetype.split('/')[0]
    if(mimeType === 'image'){
        cb(null,true)
    }
    else{
        req.fileTypeError=true;
        cb(null,false);

    }
}

const myStorage = multer.diskStorage({
    filename:function(req,file,cb){
         cb(null,Date.now() + '-'+file.originalname)
    },
    destination:function(req,file,cb){
        cb(null,path.join(process.cwd(),'uploads/images'))
    }
})

const upload = multer({
    storage:myStorage,
    fileFilter:typeFilter
})

module.exports = upload