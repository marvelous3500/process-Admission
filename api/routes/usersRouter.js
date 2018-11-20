import * as userController from '../controller/userController'
// import { userModel as users } from '../Model /userModel'
import Joi from 'joi'
// import { userSchema as userValidate } from '../Middleware/userValidate'
import express from 'express'

var router = express.Router()
// get userById
router.get('/:id', async (req, res) => {
  let { id } = req.params
  try {
    let result = await userController.getUserById(id)
    console.log(`result`, result)
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.post('/', async (req, res) => {
  // const validateData = await Joi.validate(req.body, userValidate)
  // if (validateData.error) {
  //   res.status(404).send(validateData.error.details[0].message)
  //   return
  // }

  const user = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.Password
  }

  try {
    const adduser = await userController.addUser(user)
    res.status(200).json(adduser)
  } catch (error) {
    return res.status(500).json(error)
  }
})

router.get('/', async (req, res, next) => {
  const getAlluser = await userController.getAllUsers()
  res.status(200).json(getAlluser)
})

router.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.param('id'))
    await userController.delectUser(id)
    res.status(200).json({ message: 'user have been deleted' })
  } catch (error) {
    return res.status(404).json({ message: 'user does not exit' })
  }
})
export default router
