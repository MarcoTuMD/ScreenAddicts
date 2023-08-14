const restful = require('node-restful')

const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
    nome: String,
    dataNascimento: String,
    email: String,
    cpf: String,
    senha: String,
})


module.exports = restful.model('Usuario', usuarioSchema)