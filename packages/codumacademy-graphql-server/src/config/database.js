require("dotenv").config();
module.exports = {
  // "development": {
  //    "username": "postgres",
  //    "password": 123456,
  //    "database": "codumacademy_development",
  //    "host": "localhost",
  //    "operatorsAliases": false,
  //    "port": 5432,
  //    "dialect": "postgres"
  // },
  development: {
    username: "root",
    password: "12345678",
    database: "codumacademy_development",
    host: "localhost",
    operatorsAliases: false,
    port: 3306,
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    operatorsAliases: false,
    dialect: "mysql"
  },
  production: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    operatorsAliases: false,
    dialect: process.env.DATABASE_DIALECT
  }
};
