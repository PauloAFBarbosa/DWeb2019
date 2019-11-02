var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')

/* GET home page. */
router.get('/', function(req, res, next) {
  Filmes.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/:idFilme', function(req, res, next) {
  Filmes.consultar(req.params.idFilme)
    .then(dados =>{
      res.render("edit",{filme:dados})
    } )
    .catch(erro => res.status(500).jsonp(erro))
});

router.delete('/:idFilme', function(req, res, next) {
  console.log("Entrou aqui");
  Filmes.apagar(req.params.idFilme)
    .then(res.redirect(303,'/'))
    .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
