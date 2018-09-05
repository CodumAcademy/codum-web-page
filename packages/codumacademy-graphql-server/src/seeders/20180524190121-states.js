'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = require("codumacademy-core/dummy-data/states.json");
    const states = data.states.map(state => ({
      name: state.name,
      countryId: parseInt(state.country_id),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    return queryInterface.bulkInsert('States', states, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  }
};
