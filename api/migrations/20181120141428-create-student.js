'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER

      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      adress: {
        type: Sequelize.STRING
      },
      streetName: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.INTEGER
      },
      stringOfOrigin: {
        type: Sequelize.STRING
      },
      twon: {
        type: Sequelize.STRING
      },
      admittedStatus: {
        type: Sequelize.ENUM,
        values: ['admitted', 'withdraw', 'apply']
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Students')
  }
}
