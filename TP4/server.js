var http=require('http');
var url=require('url');
var fs=require('fs');

var myserver=http.createServer(function(req,res){
    var partes= req.url.split('/');
    var num = partes[partes.length-1];
    console.log("NUM->"+num);
    if (num>0 && num<123){
        fs.readFile('dataset/arq'+num+'.xml',function(err,data){
            res.writeHead(200,{'Content-Type':'text/xml'})
            res.write(data);
            res.end();
        })
    }
    else if (num=="arq2html.xsl"){
        fs.readFile('arq2html.xsl',function(err,data){
            res.writeHead(200,{'Content-Type':'text/xml'})
            res.write(data);
            res.end();
        })
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("Ficheiro not found! "+num);
        res.end();
    }
});

myserver.listen(7777);