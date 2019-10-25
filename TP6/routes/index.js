var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile');
var fs = require('fs');

var myDB = __dirname+"/../arq-son-EVO.json"

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myDB, (erro, musicas) => {
    if(!erro){
      res.render('index',{lista:musicas})
    }
    else{
      res.render('error',{error:erro})
    }
})
});

router.get('/show/:mus', function(req, res, next) {
  console.log("Recebi um pedido de show");
  console.log(req.params.mus);
  
  jsonfile.readFile(myDB,(erro,musicas)=>{
    if(!erro){
      var index = musicas.findIndex(a => a.tit == req.params.mus)
      if(index > -1){
        var musicaTemp = musicas[index];
        console.log(musicaTemp);
        res.send(musicaTemp);
        
    }
    else {
        console.log('Erro: não consegui encontrar o elemento a mostrar...')
        res.end('1')
    }
    }
  })

});

router.get('/apagar.js', function(req, res, next) {
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
  jsonfile.readFile(myDB,(erro,musicas)=>{
    if(!erro){
      musicas.push(req.body);
      jsonfile.writeFile(myDB,musicas,erro => {
        if(erro) console.log(erro)
        else console.log("Registo gravado com sucesso")
      })
    }
  })
  res.redirect('/')
})

router.delete('/:id',function(req,res){
  var id = req.params.id;
  
  jsonfile.readFile(myDB,(erro,musicas)=>{
    if(!erro){
      var index = musicas.findIndex(a => a.tit == id)
      if(index > -1){
        musicas.splice(index, 1)
        jsonfile.writeFile(myDB, musicas, erro => {
            if(erro) console.log(erro)
            else console.log('BD atualizada com sucesso.')
        })
        
        res.redirect(303,'/')
    }
    else {
        console.log('Erro: não consegui encontrar o elemento a remover...')
        res.end('1')
    }
    }
  })
})

router.put('/',function(req,res){
  var prov = req.body.tprov;
  var local = req.body.tlocal;
  var tit = req.body.ttit;
  var musico = req.body.tmusico;
  var duracao = req.body.tduracao;
  console.log("Recebi um put com isto"+prov+"|"+local+"|"+tit+"|"+musico+"|"+duracao);
  
  jsonfile.readFile(myDB,(erro,musicas)=>{
    if(!erro){
      var index = musicas.findIndex(a => a.tit == tit)
      if(index > -1){
        musicas.splice(index, 1) // Aqui elimina
        //Agora vai ter de adicionar ao ficheiro
        //var save = JSON.stringify({prov:prov,local:local,tit:tit,musico:musico,duracao:duracao});
        var save = {"prov":prov,"local":local,"tit":tit,"musico":musico,"duracao":duracao};
        console.log(save);
        musicas.push(save);
        jsonfile.writeFile(myDB, musicas, erro => {
            if(erro) console.log(erro)
            else console.log('BD atualizada com sucesso.')
        })
        
        res.redirect(303,'/')
    }
    else {
        console.log('Erro: não consegui encontrar o elemento a fazer update...')
        res.end('1')
    }
    }
  })
})

module.exports = router;
