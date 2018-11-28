const student = require('../models').Student

export async function grantStudentAdmission (id) {
  let admitted = 'admitted'
  await student.find({ where: {
    id: id
  } }).then(admissionStatus => {
    return admissionStatus.updateAttributes(admitted)
  })
}

export async function withdrawStudentAdmission (id) {
  let withdrawStudent = 'withdraw'
  await student.find({ where: {
    id: id
  } }).then(admissionStatus => {
    return admissionStatus.updateAttributes(withdrawStudent)
  })
}

export async function withdrawedStudents () {
  const withdrawStudent = await student.findAll({
    admittedStatus: 'withdraw'
  })
  return withdrawStudent
}

export async function apliedStudents () {
  console.log('functioon called')
  
  // const appliedStudent = await student.findAll({
  //   where: { admittedStatus: 'apply' }
  // })
  // console.log( "apply student:", appliedStudent)
  // return appliedStudent
}
