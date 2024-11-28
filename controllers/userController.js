

const User = require('../models/User');  // Importer le modèle utilisateur (connexion à la base de données)

//get

const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();  // Récupérer tous les utilisateurs de la base de données
      res.status(200).json(users);  // Envoyer la liste des utilisateurs en réponse
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  };

// Create

const createUser = async (req, res) =>{

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
}
  
// Read (find)

  const findUser= async(req,res)=>{
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
}


// Update

const updateUser= async (req, res)=>{
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

}

 // Delete

  const deleteUser= async (req,res)=>{
    

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
  
  
  
  
  }







  module.exports={
    getAllUsers,
    createUser,
    findUser,
    updateUser,
    deleteUser
  }