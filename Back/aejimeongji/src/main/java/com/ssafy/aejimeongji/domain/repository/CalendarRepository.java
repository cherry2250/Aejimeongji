package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CalendarRepository extends JpaRepository<Calendar, Long> {

    @Query("select c from Calendar c join fetch c.dog d where d.id = :dogId")
    List<Calendar> findByDogId(@Param("dogId") Long dogId);

}
