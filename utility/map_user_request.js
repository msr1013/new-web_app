/**
 * map incoming request
 * @param {Object} user 
 * @param {Object} userDetails 
 * @returns {Object}
 */

module.exports=function(user,userDetails){
    if(userDetails.name)
        user.name=userDetails.name
    if(userDetails.password)
        user.password=userDetails.password
    if(userDetails.email)
        user.email=userDetails.email
    if(userDetails.username)
        user.username=userDetails.username
    if(userDetails.phoneNumber)
        user.phoneNumber=userDetails.phoneNumber
    if(userDetails.gender)
        user.gender=userDetails.gender
    if(userDetails.role)
        user.role=userDetails.role
    if(userDetails.status)
        user.status=userDetails.status
    if(userDetails.image)
        user.image=userDetails.image
    if(userDetails.isMarried)
        user.isMarried=userDetails.isMarried
    if(userDetails.date_of_birth)
        user.date_of_birth=userDetails.date_of_birth
    if(userDetails.tempAddress || userDetails.permanentAddress){
        if(!user.address)
            user.address={}
        if(userDetails.tempAddress)
            user.address.tempAddress=userDetails.tempAddress.split(',')
        if(userDetails.permanentAddress)
            user.address.permanentAddress=userDetails.permanentAddress
        }
        return user
}