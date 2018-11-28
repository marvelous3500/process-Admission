import * as studentService from '../service/studentService'
// busssine 
export async function applyForAdmission (newStudent) {
  return studentService.applyForAdmission(newStudent)
}
export async function getAllStudent () {
  return studentService.getAllstudents()
}

export async function getStudentById (studentId) {
  return studentService.getStudentById(studentId)
}

export async function updateStudent (student) {
  return studentService.updateStudent(student)
}

export async function delectStudent (studentId) {
  return studentService.delectStudent(studentId)
}

export async function grantStudentAdmission (studentId) {
  return studentService.grantStudentAdmission(studentId)
}

export async function withdrawStudentAdmission (studentId) {
  return studentService.withdrawStudentAdmission(studentId)
}

export async function getAllAdmittedStudent () {
  return studentService.getAllAdmittedStudent()
}

export async function getAllWithdrawStudent () {
  return studentService.getAllWithdrawStudent()
}
