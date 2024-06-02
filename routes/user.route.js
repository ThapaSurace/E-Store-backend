import express from 'express'
import { register } from '../controller/auth.controller.js'

const router = express.Router()

//register user
router.post('/auth/register', register)

export default router