'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Quizzes', {
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
      isPoll: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      answersNumber: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      quizCategoryId: {
        type: Sequelize.INTEGER,
        references: {
            model: "QuizCategories",
            key: "id"
        }
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
    return queryInterface.dropTable('Quizzes');
  }
};
