"use strict";

const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = await bcrypt.hash("12356", 10);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Admin",
          email: "admin@admin.com",
          birtday: "1990-01-01",
          identityDoc: "123456",
          phone: "123456",
          typeIdentityDocId: 1,
          countryId: 47,
          stateId: 789,
          cityId: 13071,
          password,
          university: "",
          career: "",
          semester: "",
          other: "",
          isAdmin: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
