var listItem = function(){
	addOption();
	$.ajax({
		url: "http://localhost:8080/item",
	
		success: function(data){
					renderList(data._embedded.item);
					addOption();
					}
	});

}

var saveItem = function(){

	var nomeItem = $('#item_salvar').val();
	var itemNmt = $('#item_nmt').val();
	var idni = $('#opcoes').val();

	$.ajax({
		dataType:'json',
		type: "POST",
		contentType : 'application/json',
		url: "http://localhost:8080/item",
		data: JSON.stringify({"name" : nomeItem , "nmt" :itemNmt,"novoitem":"http://localhost:8080/novoitem/"+idni}),
		    success: function(){
			    listItem();
			  
		    },
		    error: function(){
		    	alert("nmt deve ser do tipo inteiro");
		    }
	});

}

var deleteItem = function(id){
	
	 $.ajax({
        url: "http://localhost:8080/item/" +id ,
        type: 'DELETE',
        success(){
        	$(self).closest("tr").remove();

        }
        
    });
}



// ==================  Funçoes novo item  ===================================
var listNovoItem = function(){
	
	$.ajax({
		url: "http://localhost:8080/novorest",
		success: function(data){
			addOption();
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

	$.ajax({
		dataType:'json',
		type: "POST",
		contentType : 'application/json',
		url: "http://localhost:8080/novoitem",
		data: vData,
		success : function(data) {
			addOption();
			listNovoItem();
			
			},
		error: function (){
			alert("ERRO:Inteiro deve ser entre 1 e 10!")
		}
	});

	
}
			
var deleteNovoItem = function(id){

	 $.ajax({
        url: "http://localhost:8080/novorest/" +id ,
        type: 'DELETE',
        success: function(){
        	addOption();
        },
        error : function(){
        	alert("ERRO:Novo item vinculado a item")
        } 

        
    });
}

var somarInteiro = function(){
	var id_somar = $('#id_somar').val();
	var valor_somar = $('#valor_somar').val();

	$.ajax({
	type: "POST",
	url: "http://localhost:8080/novorest/"+id_somar+"/"+valor_somar,
	
	success: function(){
		listNovoItem();
	},
	error: function(){
		alert("ID inválido")
	}
	});
	
}	

//========================caixa dropdown=================

var addOption =  function(){
	$.ajax({
		url:"http://localhost:8080/novorest",
		success: function(data){
			
			for(i in data){
				let id = data[i].id;
				
			if(i == 0){
				$('.opcoes').html("<option value="+id+">"+id+"</option>");
				
				}else{
							
				$('.opcoes option:last').after("<option value="+id+">"+id+"</option>");
				}
			}
		}

	});

}