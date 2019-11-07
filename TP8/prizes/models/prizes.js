var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var laureatesSchema = new mongoose.Schema({
    id: String,
    firstname:String,
    surname:String,
    motivation:String,
    share:Number
  });

var prizesSchema = new mongoose.Schema({
    year:String,
    category:String,
    overallMotivation:String,   
    laureates:[laureatesSchema]
});
//prize é o nome da colecção no singular
module.exports= mongoose.model('prize',prizesSchema)