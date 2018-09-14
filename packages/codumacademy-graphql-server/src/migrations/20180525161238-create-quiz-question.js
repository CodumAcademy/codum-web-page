'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('QuizQuestions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
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
      quizQuestionTypeId: {
        type: Sequelize.INTEGER,
        references: {
            model: "QuizQuestionTypes",
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
    return queryInterface.dropTable('QuizQuestions');
  }
};
