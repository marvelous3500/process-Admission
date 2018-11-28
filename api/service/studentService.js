const student = require('../models').Student

export async function applyForAdmission (newStudent) {
  await student.create(newStudent)
}
export async function getStudentById (studentId) {
  let studentObject = await student.findOne(
    {
      where: {
        id: studentId
      }
    }
  )
  return studentObject
}

export async function getAllstudents () {
  const students = await student.findAll()
  return students
}

export async function deleteSudent (studentId) {
  await student.destroy({
    where: {
      id: studentId
    }
  })
}

export async function updateStudent (studentObj) {
  await student.update({
  })
}

export async function grantStudentAdmission (studentId) {
  const admitted = 'admitted'
  student.update({ admittedStatus: admitted }, { where: { id: studentId } })
}

export async function withdrawStudentAdmission (studentId) {
  const admitted = null
  student.update({ admittedStatus: admitted }, { where: { id: studentId } })
}

export async function getAllWithdrawStudent () {
  student.findAll({
    admittedStatus: 'admitted'
  })
}
