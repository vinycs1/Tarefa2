package maispartners.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import org.springframework.data.repository.query.Param;
import maispartners.domain.NovoItem;

@RepositoryRestResource(collectionResourceRel = "novoitem", path = "novoitem")
public interface NovoItemRepository extends CrudRepository<NovoItem, Long> {
	
	List<NovoItem> findById(@Param("id") Long id);

	List<NovoItem> findByName(@Param("name") String name);
}
