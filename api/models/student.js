'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    adress: DataTypes.STRING,
    streetName: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    stringOfOrigin: DataTypes.STRING,
    twon: DataTypes.STRING,
    admittedStatus: DataTypes.STRING

  }, {});
  Student.associate = function(models) {
    // associations can be defined here
    Student.belongsTo(models.User)
  };
  return Student;
};