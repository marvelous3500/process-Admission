import * as studentController from '../controller/studentController'
import express from 'express'
var studentrouter = express.Router()

studentrouter.post('/', async (req, res) => {
  const newStudent = {
    userId: req.body.userId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    streetName: req.body.streetName,
    stateOfOrigin: req.body.stateOfOrigin,
    town: req.body.town,
    admittedStatus: 'admitted'
  }

  try {
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

// studentrouter.get('/:id', async (req, res) => {
//   let { id } = req.params
//   const getUserById = await studentController.getStudentById(id)
//   return res.status(200).json(getUserById)
// })

studentrouter.delete('/:id', async (req, res) => {
  let { id } = req.params
  await studentController.deleteStudent(id)
  return res.status(200).json({ message: 'student have been deleted' })
})

studentrouter.get('/admittedStudent', async (req, res) => {
  try {
    const allAdmittedStudent = await studentController.admittedStudent()
    return res.status(200).json(allAdmittedStudent)
  } catch (error) {
    return res.status(404).json(error)
  }
})

studentrouter.get('/aplied', async (req, res) => {
  try {
    const apllyStudent = await studentController.apliedStudent()
    return res.status(200).json(apllyStudent)
  } catch (error) {
    return res.status(404).json(error)
  }
})

studentrouter.get('/withdrawedStudents', async (req, res) => {
  try {
    const withdrawStudents = await studentController.withdrawStudents()
    return res.status(200).json(withdrawStudents)
  } catch (error) {
    return res.status(404).json(error)
  }
})

studentrouter.patch('/grantAmission/:id', async (req, res) => {
  try {
    let { id } = req.params
    await studentController.grantStudentAdmission(id)
    res.status(203).json({ message: 'student has been granted admission' })
  } catch (error) {
    res.status(404).json(error)
  }
})
studentrouter.patch('/withdrawAdmission/:id', async (req, res) => {
  try {
    let { id } = req.params
    await studentController.withdrawStudentAdmission(id)
    res.status(200).json({ message: 'the student admission has been withdraw ' })
  } catch (error) {
    res.status(404).json(error)
  }
})

export default studentrouter
