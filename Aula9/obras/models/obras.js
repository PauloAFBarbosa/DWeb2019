var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var obrasSchema = new mongoose.Schema({
    _id:String,
    nome:String,
    desc:String,
    anoCriacao:String,
    periodo:String,
    compositor:String,
    duracao:String,
});
//prize é o nome da colecção no singular
module.exports= mongoose.model('obra',obrasSchema)