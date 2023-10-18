const mongoose =require ('mongoose')

const userSchema =mongoose.Schema({
    email : {
        type : String,
        require :[true, 'please enter valid email address'],
        unique : true 
    },
    password : {
        type : String,
        require : [true , 'please enter your password']
    }
})

const userModel = mongoose.model ('users', userSchema)

module.exports =userModel
