"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "university", {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Users", "university");
  }
};
