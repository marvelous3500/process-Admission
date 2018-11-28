import * as studentService from '../service/studentService'
const student = require('../models').Student

export async function applyForAdmission (newStudent) {
  await student.create(newStudent)
}
export async function getAllStudent () {
  const students = await student.findAll()
  return students
}

// export async function getStudentById (id) {
//   let studentObject = await student.find(
//     {
//       where: {
//         id: id
//       }
//     }
//   )
//   return studentObject
// }

export async function updateStudent (studentObject) {
  await student.update(studentObject)
}

export async function deleteStudent (id) {
  await student.destroy({
    where: {
      id: id
    }
  })
}

export async function admittedStudent () {
  const students = await student.findAll({
    where: { admittedStatus: 'admitted' }
  })
  return students
}

export async function grantStudentAdmission (id) {
  return studentService.grantStudentAdmission(id)
}

export async function withdrawStudentAdmission (id) {
  return studentService.withdrawStudentAdmission(id)
}

export async function withdrawStudents () {
  return studentService.withdrawedStudents()
}

export async function apliedStudent () {
  return studentService.apliedStudents()
}
