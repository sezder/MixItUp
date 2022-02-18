"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          id: 2,
          email: faker.internet.email(),
          username: "peastropicalkiwiowl",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          id: 3,
          email: faker.internet.email(),
          username: "octopustheapartment",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          id: 4,
          email: faker.internet.email(),
          username: "hurricaneblackberry",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          id: 5,
          email: faker.internet.email(),
          username: "operacheesesticks",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          id: 6,
          email: faker.internet.email(),
          username: "logwhiskeycocktail",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
