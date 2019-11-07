var express = require('express');
var router = express.Router();

var Prizes = require('../controllers/prizes');

/* GET home page. */
router.get('/premios', function(req, res, next) {
    console.log("Recebi categoria ->"+req.query.categoria);
    if (req.query.categoria==undefined){
        console.log("Entrou no if 1")
        Prizes.premios()
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.categoria!=undefined && req.query.data==undefined){
        console.log("Entrou no if 2 com categoria ->"+req.query.categoria)
        Prizes.premiosCategoria(req.query.categoria)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
    else if (req.query.categoria!=undefined && req.query.data!=undefined){
        console.log("Entrou no if 3 com categoria ->"+req.query.categoria+" E ano->"+req.query.data)
        Prizes.premiosCategoriaData(req.query.categoria,req.query.data)
        .then(dados=>res.jsonp(dados))
        .catch(erro=>res.status(500).jsonp(erro));
    }
});

router.get('/premios/:id', function(req, res, next) {
    Prizes.premiosId(req.params.id)
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
  });

router.get('/categorias', function(req, res, next) {
    Prizes.categorias()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

router.get('/laureados', function(req, res, next) {
    Prizes.laureados()
      .then(dados=>res.jsonp(dados))
      .catch(erro=>res.status(500).jsonp(erro));
});

module.exports = router;
