const { run } = require('runjs');

const restart = () => {
  run('sequelize db:migrate:undo:all');
  run('sequelize db:migrate');
  run('sequelize db:seed:all');
};

module.exports = {
  'db:restart': restart,
};