


const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: { type: "string" , required:true},
   email: { type: "string" , required:true},
   
})


module.exports = mongoose.model('Users',userSchema)