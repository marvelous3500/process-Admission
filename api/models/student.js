'use strict'
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    adress: DataTypes.STRING,
    streetName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    stringOfOrigin: DataTypes.STRING,
    twon: DataTypes.STRING
  }, {})
  student.associate = function (models) {
    student.belongsTo(models.User)
  }
  return student
}
