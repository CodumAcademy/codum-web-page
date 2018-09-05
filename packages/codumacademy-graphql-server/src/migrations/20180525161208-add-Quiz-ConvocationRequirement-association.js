'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Quizzes",
      "convocationRequirementId",
      {
        type: Sequelize.INTEGER,
        references: {
            model: "ConvocationRequirements",
            key: "id"
        }
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Quizzes',
      'convocationRequirementId'
    );
  }
};
