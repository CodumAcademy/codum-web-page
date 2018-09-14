'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TypeIdentityDocs', [
      {
        id: 1,
        name: "C.C.",
        slug: "cc",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "T.I.",
        slug: "ti",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TypeIdentityDocs', null, {});
  }
};
