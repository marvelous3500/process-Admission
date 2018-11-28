'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.ENUM
  }, {})
  User.associate = function (models) {
    // associations can be defined here
    User.hasOne(models.Student)
  }
  return User
}
