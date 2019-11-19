var express = require('express');
var router = express.Router();
const fs = require('fs')
var Ficheiros= require('../controllers/ficheiros')
var Ficheiro= require('../models/ficheiros')

var multer = require('multer')
var upload = multer({dest:'uploads/'})

/* GET users listing. */
router.get('/ficheiros', function(req, res) {
  Ficheiros.listar()
    .then(dados=> res.jsonp(dados))
    .catch(erro=> res.status(500).jsonp(erro))
});

//para fazer upload de muitos p upload.single passa a upload.array
//vamos obter um req.files que é um array de objectos
router.post('/ficheiros',upload.array('ficheiro'),function(req,res){
  var i=0;
  req.files.forEach(f=>{
    let oldPath = __dirname + '/../'+ f.path
    let newPath = __dirname + '/../public/ficheiros/' + f.originalname

    fs.rename(oldPath,newPath, function(err){
      if (err) throw err
    })

    let data = new Date()

  
    let novoFicheiro = Ficheiro({
      data: data.toISOString(),
      desc: req.body.desc[i],
      name: f.originalname,
      mimetype: f.mimetype,
      size: f.size
    })
    i++;
  
    novoFicheiro.save(function(err,ficheiro){
      if (!err) console.log("Ficheiro guardado com sucesso!")
      else console.log("Erro: "+err);
    })
  })

  

  res.redirect('/')

})

module.exports = router;
