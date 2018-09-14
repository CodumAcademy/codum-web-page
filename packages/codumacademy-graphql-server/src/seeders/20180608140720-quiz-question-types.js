'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = [
      {
        id: 1,
        slug: "Simple",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        slug: "Multiple",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        slug: "Abierta",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    return queryInterface.bulkInsert('QuizQuestionTypes', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('QuizQuestionTypes', null, {});
  }
};
