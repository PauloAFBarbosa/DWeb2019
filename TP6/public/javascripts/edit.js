function editItem (prov,local,tit,musico,duracao){
	console.log('vou tentar editar o' + prov+local+tit+musico+duracao+'...')
	
	axios.put('/',{
		tprov:prov,
		tlocal:local,
		ttit:tit,
		tmusico:musico,
		tduracao:duracao
	})
	.then(function(response){
		
		oFormObject.elements["tit"].disabled=false;
		oFormObject.elements["enviar"].type='submit';
		oFormObject.elements["update"].type='hidden';
		window.location.assign('/')
	})
		.catch(error=>console.log(error))
}