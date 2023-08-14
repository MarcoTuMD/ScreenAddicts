const Usuario = require('./usuario');

//Create REST API, adds CRUD to Mongog's schema

Usuario.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated

Usuario.updateOptions({ new: true, runValidators: true });

module.exports = Usuario