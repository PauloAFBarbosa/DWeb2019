function showItem (ident){
	console.log('vou tentar ir buscar o' + ident+'...')
	
	axios.get('/show/'+ident)
		.then(function(response){
			console.log("Recebi uma resposta");
			oFormObject = document.forms['form1'];
			oFormObject.elements["prov"].value=response.data.prov;
			oFormObject.elements["local"].value=response.data.local;
			oFormObject.elements["tit"].value=response.data.tit;
			oFormObject.elements["musico"].value=response.data.musico;
			oFormObject.elements["duracao"].value=response.data.duracao;
			oFormObject.elements["tit"].disabled=true;
			oFormObject.elements["enviar"].type='hidden';
			oFormObject.elements["update"].type='button';
			window.scrollTo(0, 0);
			
		})
		.catch(error=>console.log(error))
}