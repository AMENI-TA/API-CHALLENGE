

const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()



const connectDB = async () =>{
    try{
       await mongoose.connect(process.env.DB_URI)
       console.log('✅ Yes DB connected  ✅')
    }
    catch(err){
        console.log('❌ No DB not connected 🥲:', err)
    }
}


module.exports = connectDB