'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuizUserQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resolved: {
        type: Sequelize.BOOLEAN
      },
      quizQuestionId: {
        type: Sequelize.INTEGER,
        references: {
            model: "QuizQuestions",
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
      quizId: {
        type: Sequelize.INTEGER,
        references: {
            model: "Quizzes",
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
    return queryInterface.dropTable('QuizUserQuestions');
  }
};
