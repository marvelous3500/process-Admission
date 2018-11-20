'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {})
  User.associate = function (models) {
    User.hasMany(models.student)
  }
  return User
}
