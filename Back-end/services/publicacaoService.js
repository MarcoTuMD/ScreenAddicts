const Publicacao = require('../models/publicacao');

//Create REST API, adds CRUD to Mongog's schema

Publicacao.methods(['get', 'post', 'put', 'delete']);

//Return post/put methods updated

Publicacao.updateOptions({ new: true, runValidators: true });

module.exports = Publicacao