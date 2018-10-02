"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birtday: {
        type: Sequelize.DATE,
        allowNull: false
      },
      identityDoc: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      howDidYouFindUs: {
        type: Sequelize.STRING
      },
      howDidYouFindUsText: {
        type: Sequelize.STRING
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      typeIdentityDocId: {
        type: Sequelize.INTEGER,
        references: {
          model: "TypeIdentityDocs",
          key: "id"
        },
        allowNull: false
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Countries",
          key: "id"
        },
        allowNull: false
      },
      stateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "States",
          key: "id"
        },
        allowNull: false
      },
      cityId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cities",
          key: "id"
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
