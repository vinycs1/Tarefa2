var renderList = function(lista){
	console.log(lista);
	for(i in lista){
		
		let str = lista[i]._links.self.href; //pega a url
		let id = str.split("/")[str.split("/").length-1];// pega o id
		let name = lista[i].name;
		let nmt = lista[i].nmt;

		if(i == 0){
			$('#itemTable tbody').html('<tr><td>'+id+'</td><td>'+ name +'</td><td>'+ nmt +' </td><td><button onClick="deleteItemRow(this,'+id+')">Deletar</button></td></tr>');
			
		}else{
						
			$('#itemTable tr:last').after('<tr><td>'+id+'</td><td>'+ name +'</td><td>'+ nmt +'</td><td><button onClick="deleteItemRow(this,'+id+')">Deletar</button></td></tr>');
		}
	}
}


var deleteItemRow = function(self, id){
	deleteItem(id);
	$(self).closest("tr").remove();
}



//============================== NOVO ITEM =======================================

var renderListNovo = function(lista){

	for(i in lista){

		let id = lista[i].id;
		let name = lista[i].name;
		let text1 = lista[i].text1;
		let text2 = lista[i].text2;
		let inteiro = lista[i].valor;
		let data = lista[i].createdAt;
		let campod = lista[i].campod;

		if(i == 0){
			$('#novoitemTable tbody').html('<tr><td>'+id+'</td><td>'+ name +'</td><td>'+ text1 +' </td><td>'+ text2 +' </td><td>'+ inteiro +' </td><td>'+ data +' </td><td>'+ campod +' </td><td><button onClick="deleteNovoItemRow(this,'+id+')">Deletar</button></td></tr>');
			
		}else{
						
			$('#novoitemTable tr:last').after('<tr><td>'+id+'</td><td>'+ name +'</td><td>'+ text1 +' </td><td>'+ text2 +' </td><td>'+ inteiro +' </td><td>'+ data +' </td><td>'+ campod +' </td><td><button onClick="deleteNovoItemRow(this,'+id+')">Deletar</button></td></tr>');
		}
	}
}

var deleteNovoItemRow = function(self, id){
	deleteNovoItem(id);
	$(self).closest("tr").remove();
}
