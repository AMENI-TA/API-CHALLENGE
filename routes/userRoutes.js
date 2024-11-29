
const express =require ('express')

const router = express.Router();

//const { Router } = require("express");

const {getAllUsers,createUser,updateUser,findUser, deleteUser} = require('../controllers/userController') 

router.get('/', getAllUsers );

router.post('/', createUser );

router.put('/:id' , updateUser);

router.get('/:id' , findUser);

router.delete( '/:id', deleteUser );


module.exports = router;


    