package maispartners.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import maispartners.domain.Item;
import maispartners.domain.NovoItem;
import maispartners.repository.ItemRepository;
import maispartners.repository.NovoItemRepository;

@Component
@ConfigurationProperties(prefix="tarefa")
public class ApplicationInitializer implements ApplicationRunner {
	
	@Autowired
	private ItemRepository itemrespository;
	
	@Autowired
	private NovoItemRepository novoitemrespository;
	

	@Override
	public void run(ApplicationArguments arg0) throws Exception {
		// NovoItem(String name,String text1, String text2 ,int valor,double campod)
			NovoItem ni1 = new NovoItem();
			ni1.setName("Novo item 1");
			ni1.setText1("texto 1");
			ni1.setText2("texto 2");
			ni1.setValor(2);
			ni1.setCampod(100); 
			
			NovoItem ni2 = new NovoItem();
			ni2.setName("Novo item 2");
			ni2.setText1("qweqwe 1");
			ni2.setText2("qweqwe 2");
			ni2.setValor(5);
			ni2.setCampod(200); 
			
			novoitemrespository.save(ni1);
			novoitemrespository.save(ni2);
		
			Item i1=  new Item();
			i1.setName("ITEM 1");
			i1.setNmt(50);
			i1.setnovoitem(ni1);
			
			Item i2=  new Item();
			i2.setName("ITEM 2");
			i2.setNmt(25);
			i2.setnovoitem(ni2);
			itemrespository.save(i1);
			itemrespository.save(i2);
		
	}

}

