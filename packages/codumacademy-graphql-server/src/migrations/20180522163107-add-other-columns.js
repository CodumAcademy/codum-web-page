"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "other", {
      type: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Users", "other");
  }
};
