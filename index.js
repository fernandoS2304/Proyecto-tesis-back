require('dotenv').config();
const httpStatus = require('http-status-codes');
const http = require('http');
const log4js = require('log4js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('express-async-errors');
const helmet = require('helmet');
const { errors } = require('celebrate');
const useragent = require('express-useragent');
const fileUpload = require('express-fileupload');
//const cookieParser = require('cookie-parser');

// routes
const categoriaRoutes = require('./src/routes/categoria');
const estadoRoutes = require('./src/routes/estado');
const rolesRoutes = require('./src/routes/roles');
const usuarioRoutes = require('./src/routes/usuario');
const departamentosRoutes = require('./src/routes/departamentos');
const provinciasRoutes = require('./src/routes/provincias');
const distritosRoutes = require('./src/routes/distritos');
const quejareclamoRoutes = require('./src/routes/quejareclamo');
const historialatencionRoutes = require('./src/routes/historialatencion');

try {
  require('fs').mkdirSync('./logs');
} catch (e) {
  if (e.code !== 'EEXIST') {
    console.error('Could not set up log directory, error was: ', e);
    process.exit(1);
  }
}

log4js.configure('./src/config/log4js.json');
const log = log4js.getLogger('startup');

const app = express();
const port = process.env.PORT || '3000';

app.set('port', port);
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(useragent.express());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(fileUpload());

app.use('/categoria',categoriaRoutes);
app.use('/estado',estadoRoutes);
app.use('/roles',rolesRoutes);
app.use('/usuario',usuarioRoutes);
app.use('/departamentos',departamentosRoutes);
app.use('/provincias',provinciasRoutes);
app.use('/distritos',distritosRoutes);
app.use('/quejareclamo',quejareclamoRoutes);
app.use('/historialatencion',historialatencionRoutes);

app.use(errors());

const db = require('./src/models');

db.sequelize.sync();

// catch 404 and forwar to error handler
app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).json({
    message: 'No encontrado',
    payload: null,
  });
});

// error handler
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: 'Servicio no disponible, intentar en unos minutos',
    payload: null,
  });
});

app.use((err, req, res) => {
  if (err.name === 'UnauthorizedError') {
    console.log(err, 'err');
    return res.status(httpStatus.UNAUTHORIZED).json({
      message: 'No autorizado',
      payload: null,
    });
  }
  log.error('Algo sali\u00F3 mal:', err);
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
    message: 'Servicio no disponible, intentar en unos momentos',
    payload: null,
  });
});

const server = http.createServer(app);
server.listen(port, () => {
  log.debug(`Express server listening on port ${server.address().port}`);
});
