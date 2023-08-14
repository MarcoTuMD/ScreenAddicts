var express = require('express')
const restful = require('node-restful')
let mongoose = restful.mongoose



let publicacao = new mongoose.Schema({
    titulo: String,
    corpo: String,
    autor: {
        id: String,
        nome: String
    },
    comentarios: [{
        corpo: String,
        data: { type: Date, default: Date.now },
        autor: {
            id: String,
            nome: String
        },
    }],
    data: { type: Date, default: Date.now },
    meta: {
        upvote: { type: Number, default: 0 },
        downvote: { type: Number, default: 0 },
    }

})

module.exports = restful.model('Publicacao', publicacao)