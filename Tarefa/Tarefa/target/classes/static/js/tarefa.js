var listItem = function(){
	$.ajax({
	url: "http://localhost:8080/item",
	
	success: function(data){
				renderList(data._embedded.item);
				}
		});
}

var saveItem = function(){

	var nomeItem = $('#item_salvar').val();
	var itemNmt = $('#item_nmt').val();
	var vData =  JSON.stringify({"name" : nomeItem , "nmt" :itemNmt});
	console.log(vData);


	$.ajax({
	dataType:'json',
	type: "POST",
	contentType : 'application/json',
	url: "http://localhost:8080/item",
	data: vData,
	    success(){
		    listItem();
	    }
	});
}
	
	

var deleteItem = function(id){

	 $.ajax({
        url: "http://localhost:8080/item/" +id ,
        type: 'DELETE'
        
    });
}



// ==================  Funçoes novo item  ===================================
var listNovoItem = function(){
	$.ajax({
	url: "http://localhost:8080/novorest",
	
	
	success: function(data){
			
			  renderListNovo(data);
				}
		});
}

var saveNovoItem = function(){

	var nomeNovoItem = $('#novo_item_salvar').val();
	var novoItemText1 = $('#novo_item_text1').val();
	var novoItemText2 = $('#novo_item_text2').val();
	var novoItemInteiro = $('#novo_item_inteiro').val();
	var novoItemDouble= $('#novo_item_double').val();
	
	var vData =  JSON.stringify({"name" : nomeNovoItem , "text1" : novoItemText1 , "text2" : novoItemText2, "valor" : novoItemInteiro, "campod":novoItemDouble});
	console.log(vData);


	$.ajax({
	dataType:'json',
	type: "POST",
	contentType : 'application/json',
	url: "http://localhost:8080/novoitem",
	data: vData,
	success(){
		listNovoItem();}
	});
}
			
var deleteNovoItem = function(id){

	 $.ajax({
        url: "http://localhost:8080/novorest/" +id ,
        type: 'DELETE'
        
    });
}

var somarInteiro = function(){
	var id_somar = $('#id_somar').val();
	var valor_somar = $('#valor_somar').val();

	$.ajax({
	type: "POST",
	url: "http://localhost:8080/novorest/"+id_somar+"/"+valor_somar,
	
	success(){
		listNovoItem();}
	});
	
}	