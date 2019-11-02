var Filme = require('../models/filme')

const Filmes = module.exports

Filmes.listar = () =>{
    return Filme
        .find()
        .sort({title:1})
        .exec()
}

Filmes.consultar = fid => {
    return Filme
        .findOne({_id:fid})
        .exec()
}

Filmes.contar = () => {
    return Filme
        .countDocuments()
        .exec()
}

Filmes.projetar = campos => {
    return Filme
        .find({},campos)
        .exec()
}

Filmes.apagar = dif => {
    return Filme
        .deleteOne({_id:dif})
        .exec()
}

Filmes.adicionar = dados => {
    var f = new Filme(dados);
    return f.save();
}

Filmes.editar = (id,dados) => {
    console.log("Edit este id ->"+id);
    return Filme
    .findOneAndUpdate({_id:id},{$set:dados})
    .exec()
    
}