'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "ConvocationRequirements",
      "quizId",
      {
        type: Sequelize.INTEGER,
        references: {
            model: "Quizzes",
            key: "id"
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'ConvocationRequirements',
      'quizId'
    );
  }
};
