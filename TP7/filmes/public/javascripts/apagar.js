
function apagaFilme (ident){
	console.log('vou tentar apagar o' + ident+'...')
	
	axios.delete('/filmes/'+ident)
		.then(response=>window.location.assign('/'))
		.catch(error=>console.log(error))
}