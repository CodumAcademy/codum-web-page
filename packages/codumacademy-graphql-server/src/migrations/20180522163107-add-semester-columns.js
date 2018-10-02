"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "semester", {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Users", "semester");
  }
};
