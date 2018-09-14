'use strict';

require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const data = [
        {
          id: 1,
          title: "Encuesta sobre experiencia en programación y código",
          description: "Descripción Encuesta sobre experiencia en programación y código",
          isPoll: true,
          answersNumber: 3,
          convocationRequirementId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          title: "Prueba básica de competencias blandas",
          description: "Descripción prueba básica de competencias blandas",
          isPoll: false,
          answersNumber: 3,
          convocationRequirementId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      return queryInterface.bulkInsert('Quizzes', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Quizzes', null, {});
  }
};
