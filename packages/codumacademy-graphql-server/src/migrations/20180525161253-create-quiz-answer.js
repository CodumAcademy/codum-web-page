'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuizAnswers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      answer: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      isSuccessAnswer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      allowAddicionalText: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      quizQuestionId: {
        type: Sequelize.INTEGER,
        references: {
            model: "QuizQuestions",
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
    return queryInterface.dropTable('QuizAnswers');
  }
};
