


const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName: { type: "string" , required:true},
    lastName: { type: "string" , required:true},
    class: { type: "string" , required:true},

})

module.exports = mongoose.model('Users',userSchema)