import express from 'express'
import {getfruits, getFruit,insertFruit} from '../controller/fruitController.js'
import { verifyAToken } from '../middleware/authenticate.js'
const router = express.Router()

router.
       route('/')
       .get(verifyAToken,getfruits)
       .post(insertFruit)

router.
      route('/:id')