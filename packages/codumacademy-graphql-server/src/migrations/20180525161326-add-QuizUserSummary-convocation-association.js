'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "QuizUserSummaries",
      "convocationId",
      {
        type: Sequelize.INTEGER,
        references: {
            model: "Convocations",
            key: "id"
        },
        allowNull: false
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'QuizUserSummaries',
      'convocationId'
    );
  }
};
