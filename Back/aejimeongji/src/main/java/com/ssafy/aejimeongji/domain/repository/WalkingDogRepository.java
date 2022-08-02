package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.WalkingDog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface WalkingDogRepository extends JpaRepository<WalkingDog, Long> {

    @Query("select wd from WalkingDog wd join fetch wd.dog d join fetch wd.walking w where d.id = :dogId")
    List<WalkingDog> findByDogId(@Param("dogId") Long dogId);

    @Query("select wd from WalkingDog wd join fetch wd.walking w where wd.id = :walkingDogId")
    Optional<WalkingDog> findWalkingDogWithWalkingById(@Param("walkingDogId") Long walkingDogId);
}
