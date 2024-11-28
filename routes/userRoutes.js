
const express =require ('express')

const router = express.Router();

//const { Router } = require("express");

const {getAllUsers,createUser,updateUser,findUser, deleteUser} = require('../controllers/userController') 

router.post('/', getAllUsers );

router.post('/', createUser );

router.put('/:id' , updateUser);

router.put('/:id' , findUser);

router.delete( '/:id', deleteUser );


module.exports = router;


    