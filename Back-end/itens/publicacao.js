const restful = require('node-restful')

const mongoose = restful.mongoose

const publicacaoSchema = new mongoose.Schema({
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

module.exports = restful.model('Publicacao', publicacaoSchema)