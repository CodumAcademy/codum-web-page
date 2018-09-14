'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = require("codumacademy-core/dummy-data/countries.json");
    const countries = data.countries.map(country => ({
      ...country,
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    return queryInterface.bulkInsert('Countries', countries, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
