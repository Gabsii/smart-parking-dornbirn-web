require('dotenv').config({ path: `${__dirname}/../.env` }); // this is important!
const Sequelize = require('sequelize');
const dbConfig = require('./config')[process.env.APP_ENV];

const sequelize = new Sequelize(dbConfig);

module.sequelize = sequelize;
global.sequelize = sequelize;
