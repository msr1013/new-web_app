//schema defination

const mongoose =  require('mongoose')

const Schema=mongoose.Schema

const UserSchema = new Schema({
    // name:String,
    name:{
        type:String,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        sparse:true

    },
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        tempAddress: [String],
        permanentAddress: String
    },
    phoneNumber:{
        type:Number
    },
    date_of_birth:{
        type:Date
    },
    gender:{
        type:String,
        enum:['male','female','others']
    },
    role:{
        type:Number, //1 for admin,2 end user,3 visitor
        default:2
    },
    status:{
        type:String,
        enum:['active','inActive'],
        default:'active',    
    },
    image:String,
    isMarried:Boolean

},{
    timestamps:true
})

const UserModel = mongoose.model('user',UserSchema)

module.exports = UserModel