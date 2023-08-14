const express = require('express');

module.exports = function (server) {

    //API Routes

    const router = express.Router();

    server.use('/', router);

    //Registering API methods in router

    const publicacaoService = require('../itens/publicacaoService');
    const usuarioService = require('../itens/usuarioService');


    publicacaoService.register(router, '/publicacao');
    usuarioService.register(router, '/usuario');


}