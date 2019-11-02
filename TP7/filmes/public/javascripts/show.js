function showFilme (ident){
	console.log('vou tentar ir buscar o' + ident+'...')
	
	axios.get('/filmes/'+ident)
		.then(function(response){
			console.log(response.data)
			
			document.open('text/html');
			document.write(response.data);
			document.close();

			
			})
		.catch(error=>console.log(error))
}