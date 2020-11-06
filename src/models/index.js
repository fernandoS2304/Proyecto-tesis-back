const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('../config/database');

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
    operatorAliases: config.operatorAliases,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  },
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

fs.readdirSync(path.join(__dirname, '../database/models'))
  .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = path.join(__dirname, '../database/models', file);
  });

db.Categoria = require('../database/models/Categoria')(sequelize,Sequelize);
db.DocumentoGestion = require('../database/models/DocumentoGestion')(sequelize,Sequelize);
db.Estado = require('../database/models/Estado')(sequelize,Sequelize);
db.EstadoXHistoriaAtencion = require('../database/models/EstadoXHistorialAtencion')(sequelize,Sequelize);
db.Evidencia = require('../database/models/Evidencia')(sequelize,Sequelize);
db.HistorialAtencion = require('../database/models/HistorialAtencion')(sequelize,Sequelize);
db.Persona = require('../database/models/Persona')(sequelize,Sequelize);
db.Poblador = require('../database/models/Poblador')(sequelize,Sequelize);
db.QuejaReclamo = require('../database/models/QuejaReclamo')(sequelize,Sequelize);
db.Responsable = require('../database/models/Responsable')(sequelize,Sequelize);
db.Rol = require('../database/models/Rol')(sequelize,Sequelize);
db.Usuario = require('../database/models/Usuario')(sequelize,Sequelize);
db.Departamentos = require('../database/models/Departamentos')(sequelize,Sequelize);
db.Provincias = require('../database/models/Provincias')(sequelize,Sequelize);
db.Distritos = require('../database/models/Distritos')(sequelize,Sequelize);

module.exports = db;
