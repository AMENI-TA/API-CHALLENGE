

const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDB = require("./config/dbConnection.js")

const userRoutes =require ('./routes/userRoutes.js')


dotenv.config()


const app = express();

connectDB()

const port = process.env.PORT

console.log('hello ')

console.log('welcom ')

app.listen(port, () => 
    console.log(`server running en port:${port}`));

app.get('/', (req,res) =>{
    res.send('welcom to our application')
})

app.use(express.json())

app.use('/users', userRoutes)

app.post('/login',(req,res)=>{
    console.log(req.body)
    console.log("userName ", req.body.userName)
    console.log("email ", req.body.email)
    

    if (!req.body.userName || !req.body.email){
        return res.status(400).json({ error:"userName and email not found"})
    }
    return res.status(200).json({ message: "log in successfully"
    }) 
   
}) 


/*const userSchema = new mongoose.Schema({
    userName: { type: "string" , required:true},
    email: { type: "string" , required:true},
})
*/
const User =require ('./models/User.js')

//create account

/*
app.post('/users', async (req,res)=>{
    try{
        const user = await User.create({
            userName: req.body.userName,
            email:  req.body.email,
            
        })
        res.status(200).json({
            message: "YES ✅ User created successflly!",
            user: user
        })
    }
   catch(err){
    res.status(400).json({ message: 'Erreur lors de la création de lutilisateur', err });

   }
})
*/

//read (get account by ID)


/*app.get ('/users/:id', async(req,res)=>{
    try{
        console.log(req.params.id)
        const user =await User.findById(req.params.id)
       if(!user){
        return res.status(400).json({
            massage:`this ID: ${req.params.id} is not  found! please try with another ID`,
            user
        })
       }

    res.status(200).json({
        massage:`Here is all the informations linked by this ID ${req.params.id} `,
        user
    })
    }
    catch(err){
        res.status(400).json(err)
    }
})
*/

//update

/* app.put('/users/:id' , async (req,res)=>{
    try{

   
const user = await User.findByIdAndUpdate(
    req.params.id ,
  
    { userName: req.body.userName, email: req.body.email },
    { new : true }
)

if(!user){
    res.status(400).json({
        message: `there is no user with this id ${req.params.id} please check`
    })
}

res.status(200).json({
    message: `YES! user with this id ${req.params.id} was updated successfully`,
    user
})

}
catch(err){
    res.status(400).json(err)
}

})
*/


//delete

/* app.delete( '/users/:id', async (req,res)=> {

    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)

        if (!deleteUser){
            res.status(400).json({
                message: `there is no user with this id ${req.params.id} please check`

            })
        }
        res.status(200).json({
            message: `YES! user with this id ${req.params.id} was deleted successfully`
        })
    }
    catch(err){
        res.status(400).json(err)
    }
}) */