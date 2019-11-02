var mongoose= require('mongoose')

var Schema = mongoose.Schema;

var FilmeSchema = new mongoose.Schema({
    title: {type:String,required:true},
    year: {type:Number,required:true},
    cast: {type:Array},
    genres: {type:Array}
  });

  module.exports= mongoose.model('filmes',FilmeSchema)