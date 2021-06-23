const mongoose=require('mongoose')
//mongoose Schema 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    }, 
        age:{
        type:Number,   
    },
    
    date:{type:Date,default:Date.now},
});
//mongoose model
let users=mongoose.model('users',userSchema,)
module.exports=users