import * as studentController from '../controller/studentController'
import Joi from 'joi'
import { studentSchema as studentValidate } from '../Middleware/studentValidate'
import express from 'express'

var studentrouter = express.Router()

studentrouter.post('/', async (req, res) => {
  // const validateData = await Joi.validate(req.body, studentValidate)
  // if (validateData.error) {
  //   res.status(404).send(validateData.error.details[0].message)
  // }
  const newStudent = {
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    streetName: req.body.streetName,
    stateOfOrigin: req.body.stateOfOrigin,
    town: req.body.town,
    admittedStatus: 'notAdmitted'
  }

  try {
    console.log(newStudent)
    const addStudent = await studentController.applyForAdmission(newStudent)
    return res.status(200).json({ message: 'thank you for Apllying for Admission' })
  } catch (error) {
    return res.status(404).send(error)
  }
})

studentrouter.get('/', async (req, res, next) => {
  const allStudent = await studentController.getAllStudent()
  return res.status(200).json(allStudent)
})

studentrouter.get('/:id', async (req, res) => {
  const { studentId } = req.params
  const getUserById = await studentController(studentId)
  return res.status(200).json(getUserById)
})
export default studentrouter
