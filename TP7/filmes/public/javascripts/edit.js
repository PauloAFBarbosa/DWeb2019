function editFilme (id,data){
	console.log('vou tentar editar o' + id+'...')
	
	axios.put('/',{
		data
	})
	.then(function(response){
		
	})
		.catch(error=>console.log(error))
}