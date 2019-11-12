var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras');

router.get('/compositores', function(req, res, next) {
  Obras.compositores()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

router.get('/periodos', function(req, res, next) {
  Obras.periodos()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

router.get('/', function(req, res, next) {
  console.log("Recebi categoria ->"+req.query.categoria);
  if (req.query.ano!=undefined){
    Obras.obrasAno(req.query.ano)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  }
  else if (req.query.compositor!=undefined && req.query.duracao!=undefined){
    Obras.obrasCompositorDuracao(req.query.compositor,req.query.duracao)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  }
  else if (req.query.periodo!=undefined){
    Obras.obrasPeriodo(req.query.periodo)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  }
  else {
    Obras.obras()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  }
  
});

router.get('/:id', function(req, res, next) {
  console.log("Entrou no id com o id ->"+req.params.id)
  Obras.obrasId(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

module.exports = router;

