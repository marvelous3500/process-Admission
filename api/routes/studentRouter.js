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
    id: students.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.lastName,
    streetName: req.body.streetName,
    homeNumber: req.body.homeNumber,
    stateOfOrigin: req.body.stateOfOrigin,
    town: req.body.town,
    admittedStatus: 'notAdmitted'
  }
  try {
    const addStudent = await studentController.applyForAdmission(newStudent)
    return res.status(200).json(addStudent)
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
