var Obra = require('../models/obras')

//Lista todos os alunos
module.exports.obras = () =>{
    return Obra
        .find({},{})
        .exec()
}

module.exports.obrasId = id =>{
    return Obra
        .find({_id:id},{})
        .exec()
}

module.exports.obrasAno = ano =>{
    return Obra
        .find({anoCriacao:ano},{})
        .exec()
}

module.exports.obrasCompositorDuracao = (comp,duracao) =>{
    return Obra
        .find({compositor:comp,duracao:{$gte:duracao}},{})
        .exec()
}

module.exports.obrasPeriodo = per =>{
    return Obra
        .find({periodo:per},{})
        .exec()
}

module.exports.compositores = () =>{
    return Obra
        .find({},{_id:0,compositor:1})
        .distinct("compositor")
        .exec()
}

module.exports.periodos = () =>{
    return Obra
        .find({},{_id:0,periodo:1})
        .distinct("periodo")
        .exec()
}