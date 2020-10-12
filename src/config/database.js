require('dotenv').config();

const log4js = require('log4js');
const log = log4js.getLogger('sequelize');

module.exports = {
  host: process.env.DB_HOSTNAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: 'America/Lima',
  logging(_log) {
    log.debug(_log);
  },
};
