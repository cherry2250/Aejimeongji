package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.Todos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TodosRepository extends JpaRepository<Todos, Long> {

    @Query("select td from Todos td join fetch td.calendar c where c.id = :calendarId")
    Todos findTodosByCalendarId(@Param("calendarId") Long calendarId);

    @Query("select td from Todos td join fetch td.dog d join fetch td.calendar c where d.id = :dogId")
    List<Todos> findTodosByDogId(@Param("dogId") Long dogId);

    @Query("select td from Todos td join fetch td.dog d join fetch td.calendar c")
    List<Todos> findAllBy();

}
