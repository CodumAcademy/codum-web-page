'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ConvocationRequirements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      helpText: {
        type: Sequelize.TEXT
      },
      success: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      required: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      needAuthorization: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      requiredApprove: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      withQuiz: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      convocationId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Convocations",
            key: "id"
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ConvocationRequirements');
  }
};
