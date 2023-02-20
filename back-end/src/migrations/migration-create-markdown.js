'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Markdowns', {
      contentHTML: {
        type: Sequelize.TEXT('long'),
      },
      contentMarkdown: {
        type: Sequelize.TEXT('long'),
      },
      description: {
        type: Sequelize.TEXT('long'),
      },
      doctorId: {
        type: Sequelize.INTEGER,
      },
      specialistId: {
        type: Sequelize.INTEGER,
      },
      clinicId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Markdowns')
  },
}
