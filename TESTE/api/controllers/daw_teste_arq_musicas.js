var daw_teste_arq_musica = require('../models/daw_teste_arq_musicas')

module.exports.obras=()=>{
    return daw_teste_arq_musica.find({},{_id:1,titulo:1,tipo:1,compositor:1}).exec();
}

module.exports.obras_id=(id)=>{
    return daw_teste_arq_musica.find({_id:id},{}).exec();
}

module.exports.obras_compositor=(c)=>{
    return daw_teste_arq_musica.find({compositor:c},{}).exec();
}

module.exports.obras_instrumento=(i)=>{
    return daw_teste_arq_musica.find({'instrumentos.designacao':i},{}).exec();
}

module.exports.tipos=()=>{
    return daw_teste_arq_musica.find({},{}).distinct('tipo').exec();
}

module.exports.obrasQuant=()=>{
    return daw_teste_arq_musica.aggregate([
        //Elimina os que nao tem instrumentos
        { $match: {instrumentos:{$exists:true}} },
        //Os que nao forem arrays é porque so tem 1 isntrumento
        {$project:{_id:1,titulo:1,partituras: { $cond: { if: { $isArray: "$instrumentos" }, then: { $size: "$instrumentos" }, else: "1"} } }}
    ]).exec();
}
