const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'vipaarna',
  port: 5432,
  database: 'blogs',
  logging: false,
});

module.exports = { db, DataTypes };
