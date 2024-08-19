import express from 'express'
import {getUsers, getUser,loginUser,insertUser } from '../controller/userController.js'
import { checkUser } from '../middleware/authenticate.js'

const router = express.Router()

router.post('/login',checkUser,loginUser)
router.get('/:id',getUser)

router.get('/',getUsers)
router.post('/insertUser',insertUser)

        

export default router