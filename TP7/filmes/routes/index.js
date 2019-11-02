var express = require('express');
var router = express.Router();
var Filmes = require('../controllers/filmes')
var fs = require('fs');

console.log("Entrei no index router")
/* GET home page. */
router.get('/', function(req, res, next) {
    Filmes.listar()
    .then(dados => res.render("index",{lista:dados}))
    .catch(erro => res.status(500).jsonp(erro))
});

router.get('/apagar.js', function(req, res, next) {
    console.log("Vou mandar o apagar.js")
    fs.readFile('./public/javascripts/apagar.js',
              {encoding: 'utf-8'},
              (err, data) => {
          if (!err)
          {
              res.send(data);
          }
      });
  });

  router.get('/show.js', function(req, res, next) {
    fs.readFile('./public/javascripts/show.js',
              {encoding: 'utf-8'},
              (err, data) => {
          if (!err)
          {
              res.send(data);
          }
      });
  });

  router.get('/j.js', function(req, res, next) {
    fs.readFile('./public/javascripts/j.js',
              {encoding: 'utf-8'},
              (err, data) => {
          if (!err)
          {
              res.send(data);
          }
      });
  });

  router.get('/j2.js', function(req, res, next) {
    fs.readFile('./public/javascripts/j2.js',
              {encoding: 'utf-8'},
              (err, data) => {
          if (!err)
          {
              res.send(data);
          }
      });
  });

  router.get('/edit.js', function(req, res, next) {
    fs.readFile('./public/javascripts/edit.js',
              {encoding: 'utf-8'},
              (err, data) => {
          if (!err)
          {
              res.send(data);
          }
      });
  });

  router.post('/',function(req,res){
    console.log(req.body)
    Filmes.adicionar(req.body)
    .then(dados => res.redirect(303,'/'))
    .catch(erro => res.status(500).jsonp(erro))
  })

  router.post('/edit',function(req,res){
    console.log(req.body)
    Filmes.editar(req.body.id,req.body)
    .then(dados => res.redirect(303,'/'))
    .catch(erro => res.status(500).jsonp(erro))
  })
module.exports = router;