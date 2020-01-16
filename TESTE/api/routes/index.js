var express = require('express');
var router = express.Router();

var daw_teste_arq_musica= require('../controllers/daw_teste_arq_musicas')

router.get('/obras', function (req, res, next) {
  //Pode receber compositor ou instrumento

  if(!req.query.compositor && !req.query.instrumento){
    daw_teste_arq_musica.obras()
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))
  }
  else if (req.query.compositor){
    var compositor = req.query.compositor;
    daw_teste_arq_musica.obras_compositor(compositor)
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))

  }
  //Esta nao esta a dar 
  else if(req.query.instrumento){
    var instrumento = req.query.instrumento;
    daw_teste_arq_musica.obras_instrumento(instrumento)
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))
  }
  
  
});

router.get('/obras/:id', function (req, res, next) {
  console.log("Vai fazer o obras id")
  var id = req.params.id;
  daw_teste_arq_musica.obras_id(id)
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))
});

router.get('/tipos', function (req, res, next) {
  daw_teste_arq_musica.tipos()
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))
});

router.get('/obrasQuant', function (req, res, next) {
  daw_teste_arq_musica.obrasQuant()
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))
});

module.exports = router;
