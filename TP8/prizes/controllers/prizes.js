var Prize = require('../models/prizes')

//Lista todos os alunos
module.exports.premios = () =>{
    return Prize
        .find({},{year:1,category:1})
        .exec()
}

module.exports.premiosId = id =>{
    return Prize
        .find({_id:id})
        .exec()
}

module.exports.premiosCategoria = cat =>{
    return Prize
        .find({category:cat})
        .exec()
}

module.exports.premiosCategoriaData = (cat,ano) =>{
    console.log("API cat e ano->"+cat+" "+ano)
    return Prize
        .find({category:cat,year:ano})
        .exec()
}

module.exports.categorias = () =>{
    return Prize
        .find({},{category:1})
        .distinct('category')
        .exec()
}

module.exports.laureados = () =>{
    return Prize
        .aggregate([
            {$unwind:"$laureates"},
            {$project:{name: {$concat:["$laureates.firstname"," ","$laureates.surname"]},premio:{year:"$year",category:"$category"}}},
            {$group:{_id:"$name",premios:{$push:"$premio"}}},
            {$sort:{name:1}}
        ])
        .exec()
}