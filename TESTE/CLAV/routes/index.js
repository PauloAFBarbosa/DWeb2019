var express = require('express');
var router = express.Router();

var axios = require('axios');

var lasturl1;
var lasturl2;

router.get('/', function(req, res, next) {
  if (lasturl1!=req.url){
    lasturl2=lasturl1;
    lasturl1=req.url;
  }

  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    res.render('index',{entidades:dados.data})
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })
});

router.get('/entidade/:id', function(req, res, next) {

  if (lasturl1!=req.url){
    lasturl2=lasturl1;
    lasturl1=req.url;
  }

  var id = req.params.id;
  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    var info=dados.data;
    axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/tipologias?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados=>{

      var tipologias=dados.data;
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/intervencao/dono?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(dados=>{
        
        var dona = dados.data;
        axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+id+'/intervencao/participante?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
        .then(dados=>{
          var participante = dados.data;
          res.render('entidade',{entidade:info,tipologias:tipologias,dona:dona,participante:participante})
        })
        .catch(erro=>{
          res.render('error',{error:erro});
        })

      })
      .catch(erro=>{
        res.render('error',{error:erro});
      })
    
    })
    .catch(erro=>{
      res.render('error',{error:erro});
    })
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })
});

router.get('/tipologia/:id', function(req, res, next) {

  if (lasturl1!=req.url){
    lasturl2=lasturl1;
    lasturl1=req.url;
  }

  var id = req.params.id;


  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/'+id+'?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
  .then(dados=>{
    res.render('tipologia',{tipologia:dados.data,lasturl:lasturl2})
  })
  .catch(erro=>{
    res.render('error',{error:erro});
  })
});

module.exports = router;
