var http=require('http');
var url=require('url');
var pug= require('pug');
var fs=require('fs');
var jsonfile = require('jsonfile');

var {parse} = require('querystring'); //so exporta a funcionalidade de parsing da querystring

var myBD = "tarefa.json";

var myserver=http.createServer((req,res)=>{
    var purl = url.parse(req.url,true);
    var query = purl.query;

    console.log(req.method + " "+ purl.pathname);

    if (req.method == 'GET'){
        if (purl.pathname =='/'){
            jsonfile.readFile(myBD, (erro,tarefas)=>{
                res.writeHead(200, {
                    'Content-Type':'text/html; charset=utf-8'
                    }
                );
                if (!erro){
                    res.write(pug.renderFile('index.pug',{lista:tarefas}));
                }
                else{
                    res.write(pug.renderFile('erro.pug',{e:'Erro na leitura da BD'}));
                }
                res.end();
            });
        }
        else if (purl.pathname == '/w3.css'){
            res.writeHead(200, {
                'Content-Type':'text/css'
                }
            );
            fs.readFile('stylesheets/w3.css',(erro,dados)=>{
                if (!erro){
                    res.write(dados);
                }
                else {
                    res.write('<p>Erro: '+erro+'</p>');
                }
                res.end();
            });
        }
        else {
            res.writeHead(200, {
                'Content-Type':'text/html; charset=utf-8'
                }
            );
            console.log('Erro: ' + req.method + " não suportado...");
            res.write(pug.renderFile('erro.pug',
                                    {e:'Erro: ' + req.method + " não suportado..."}
                                    ));
            res.end();
        }
    }
    else if (req.method == 'POST'){
        if (purl.pathname=='/add'){
            recuperaInfo(req,resultado => {
                jsonfile.readFile(myBD, (erro,alunos)=>{
                    if (!erro){
                        alunos.push(resultado);
                        jsonfile.writeFile(myBD,alunos,erro =>{
                            if (erro){
                                console.log("Erro: "+erro);
                            }
                            else{
                                console.log ("Registo gravado com sucesso...");
                                res.writeHead(302, {
                                    'Location': 'http://localhost:5005/'
                                    //add other headers here...
                                  });
                                res.end();
                            }
                        })
                    }
                })
            });
        }
    }
    else {
        res.writeHead(200, {
            'Content-Type':'text/html; charset=utf-8'
            }
        );
        console.log('Erro: ' + req.method + " não suportado...");
        res.write(pug.renderFile('erro.pug',
                                {e:'Erro: ' + req.method + " não suportado..."}
                                ));
        res.end();
    }
});

myserver.listen(5005,()=> {
        console.log("Servidor à escuta na porta 5005")
    });



function recuperaInfo (request, callback){
    //temos de identificar de que forma vem os dados urlencoded ou multipart formdata
    if (request.headers['content-type']=='application/x-www-form-urlencoded'){
        let body = "";
        request.on('data',bloco => {
            console.log(bloco.toString());
            body+=bloco.toString();
        })
        request.on('end',()=>{
            callback(parse(body));
        })
    }
}