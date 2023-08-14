const restful = require('node-restful')

const mongoose = restful.mongoose

const pessoaSchema = new mongoose.Schema({

    name: { type: String, required: true },

    type: { type: String, required: true },

    age: { type: Number, min: 0, required: true }

})

module.exports = restful.model('Pessoa', pessoaSchema)