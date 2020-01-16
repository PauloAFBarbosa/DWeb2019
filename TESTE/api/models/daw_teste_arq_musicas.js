const mongoose = require('mongoose')

var daw_teste_arq_musicaSchema = new mongoose.Schema({
    _id: String,
    titulo: String,
    tipo:String,
    compositor:String,
    instrumentos:[{
        designacao: String,
        partitura: {
            _path:String,
            _voz:String
        }
    }]
})
// aqui deu problema porque na base de dados nao o nome nao tem s, se tiver o nome com s no fim fica assim (ex obras) module.exports = mongoose.model('obra',premiosTesteSchema)
module.exports = mongoose.model('daw_teste_arq_musica',daw_teste_arq_musicaSchema)