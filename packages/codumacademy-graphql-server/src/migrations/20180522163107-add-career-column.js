"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "career", {
      type: Sequelize.STRING,
      allowNull: false
    });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Users", "career");
  }
};
