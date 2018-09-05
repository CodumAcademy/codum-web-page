'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = require("codumacademy-core/dummy-data/cities.json");
    const cities = data.cities.map(city => ({
      name: city.name,
      stateId: parseInt(city.state_id),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    return queryInterface.bulkInsert('Cities', cities, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
