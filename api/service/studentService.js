const student = require('../models').Student

export async function grantStudentAdmission (id) {
  let admitted = 'admitted'
  await student.update({ admittedStatus: admitted },
    { where: { id: id } })
}

export async function withdrawStudentAdmission (id) {
  let withdrawStudent = 'withdraw'
  await student.update({ admittedStatus: withdrawStudent },
    { where: { id: id } })
}

export async function withdrawedStudents () {
  const withdrawStudent = await student.findAll({
    where: { admittedStatus: 'withdraw' }

  })
  return withdrawStudent
}

export async function apliedStudents () {
  const appliedStudent = await student.findAll({
    where: { admittedStatus: 'apply' }
  })
  return appliedStudent
}
