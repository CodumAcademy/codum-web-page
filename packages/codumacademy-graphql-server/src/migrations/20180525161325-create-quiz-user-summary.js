'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuizUserSummaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      finished: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      successAnswers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      failedAnswers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      totalAnswers: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      quizId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Quizzes",
            key: "id"
        },
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Users",
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
    return queryInterface.dropTable('QuizUserSummaries');
  }
};
