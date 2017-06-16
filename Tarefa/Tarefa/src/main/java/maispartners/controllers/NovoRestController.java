package maispartners.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import maispartners.domain.NovoItem;
import maispartners.repository.NovoItemRepository;


@RestController
public class NovoRestController {
	
	private NovoItemRepository repository;
	
	@Autowired
	public NovoRestController(NovoItemRepository repository){
		this.repository = repository;
	}

	 
  @RequestMapping(value = "/novorest", method = RequestMethod.GET)
  public Iterable<NovoItem> listar() {
	  return this.repository.findAll();
  }
  
  @RequestMapping(value = "/novorest/{id}/{p}", method = RequestMethod.POST)
  public @ResponseBody ResponseEntity<String>  troca(@PathVariable("id") long id, @PathVariable("p") int p) throws JSONException {
	  final HttpHeaders headers = new HttpHeaders();
	  	headers.setContentType(MediaType.APPLICATION_JSON);
		headers.setPragma("no-cache");
		headers.setCacheControl("no-cache");
	  
	  
	  NovoItem novoitem = repository.findOne(id);
	  JSONObject json = new JSONObject();
	  
	  int teste = p + novoitem.getValor();//soma
	  
	  if(teste <=10 && teste>=1 ){
		 novoitem.setValor(teste);
		 repository.save(novoitem);
	 }else{
		 novoitem.setValor(3);
		 repository.save(novoitem);
	  }
	  
	  json.put("item", novoitem.getId());
	  json.put("inteiro", novoitem.getValor());
	  json.put("data", novoitem.getCreatedAt());
	  String j = json.toString();
	  
	  //return j;
	  return new ResponseEntity<String>(j, headers, HttpStatus.OK);
	
	 }
  
  	@RequestMapping(value = "/novorest/{id}", method = RequestMethod.DELETE)
  	public void deletar(@PathVariable("id") long id) {
  		
  		repository.delete(id);
  			 
  	}
  	
  
 }
	

