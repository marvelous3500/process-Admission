const student = require('../models').Student

export async function applyForAdmission (newStudent) {
  await student.create(newStudent)
}
