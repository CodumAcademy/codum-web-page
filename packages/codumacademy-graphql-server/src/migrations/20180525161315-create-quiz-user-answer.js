'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuizUserAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      addicionalText: {
        type: Sequelize.TEXT
      },
      multiple: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      answers: {
        type: Sequelize.TEXT,
        default: ""
      },
      quizAnswerId: {
        type: Sequelize.INTEGER,
        references: {
            model: "QuizAnswers",
            key: "id"
        },
        allowNull: true
      },
      quizQuestionId: {
        type: Sequelize.INTEGER,
        references: {
            model: "QuizQuestions",
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
    return queryInterface.dropTable('QuizUserAnswers');
  }
};
