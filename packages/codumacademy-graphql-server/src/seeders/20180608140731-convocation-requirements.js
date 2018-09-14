'use strict';

require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const data = [
        {
          id: 1,
          description: "Encuesta sobre experiencia en programación y código",
          helpText: "Ayuda encuesta experiencia",
          required: true,
          withQuiz: true,
          convocationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          description: "Prueba básica de competencias blandas",
          helpText: "Ayuda prueba básica de competencias blandas",
          required: true,
          withQuiz: true,
          convocationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
      return queryInterface.bulkInsert('ConvocationRequirements', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ConvocationRequirements', null, {});
  }
};
