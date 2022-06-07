const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

//Example de importação de model
//const NomeDoModel = require("../models/Modelo");

const connection = new Sequelize(dbConfig);

//Example de inicialiação de connection
//NomeDoModel.init(connection);

module.exports = connection;

//listem on: http://localhost:3333/