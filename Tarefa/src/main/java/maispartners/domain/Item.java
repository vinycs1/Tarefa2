package maispartners.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String name;
	
	private int nmt;
	
	@OneToOne
	@JoinColumn(name ="novoitemid")
	private NovoItem novoitem;
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getNmt() {
		return nmt;
	}

	public void setNmt(int nmt) {
		this.nmt = nmt;
	}
	
	
	public NovoItem getnovoitem(){
		return  this.novoitem;
	}
	
	public void setnovoitem(NovoItem ni){
		this.novoitem = ni;
	}

	
}
