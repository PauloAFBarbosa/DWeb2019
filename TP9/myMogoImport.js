const args = require('yargs').argv;
const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;


//-d diz a database
//-c diz a collection
//--jasonparse diz o formato
//-f diz o ficheiro que vai ler json

if (args.f == undefined){
	console.log("Erro, ficheiro para leitura (-f) em falta.")
	return;
}
if (args.d == undefined){
	console.log("Erro, database (-d) em falta.")
	return;
}
if (args.c == undefined){
	console.log("Erro, collection (-c) em falta.")
	return;
}
if (args.jsonArray == undefined){
	console.log("Erro, --jsonArray em falta, neste momento é o unico modo suportado.")
	return;
}

//le o ficheiro
let rawdata = fs.readFileSync(args.f);
let file = JSON.parse(rawdata);

var insert=0;

MongoClient.connect("mongodb://localhost/", {useNewUrlParser: true, useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  
  //database
  var dbo = db.db(args.d);
  //itera sobre cada elemento do array
  file.forEach(function(element) {
  		dbo.collection(args.c).insertOne(element, function(err, res) {
    		if (err) throw err;
    		insert=insert+1;
    		console.log("Insert "+insert)
    	db.close();
  		});
	});
});