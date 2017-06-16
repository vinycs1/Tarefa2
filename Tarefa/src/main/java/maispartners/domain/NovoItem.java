package maispartners.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import org.hibernate.validator.constraints.Range;

@Entity
public class NovoItem {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public Long id;
	
	
	public String name;
	
	
	public String text1;
	
	public String text2;
	
	@Range(min=1,max=10)
	public int valor;
	
	String CreatedAt;
	
	public double campod;
	
	public NovoItem(){
		
		int dia = new Date().getDate();
		int mes = new Date().getMonth() + 1;
		int ano = new Date().getYear() + 1900;
		
		this.CreatedAt = Integer.toString(dia) +"/"+ Integer.toString(mes)  +"/"+ Integer.toString(ano);
}


	//getters and setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getText1() {
		return text1;
	}

	public void setText1(String text1) {
		this.text1 = text1;
	}

	public String getText2() {
		return text2;
	}

	public void setText2(String text2) {
		this.text2 = text2;
	}

	public int getValor() {
		return valor;
	}

	public void setValor(int valor) {
		this.valor = valor;
		
	}

	public String getCreatedAt() {
		return CreatedAt;
	}

	public void setCreatedAt(String createdAt) {
		
		this.CreatedAt = createdAt;
	}

	public double getCampod() {
		return campod;
	}

	public void setCampod(double campod) {
		this.campod = campod;
	}



}
