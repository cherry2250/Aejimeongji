package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GuideBookRepository extends JpaRepository<GuideBook, Long> {

    List<GuideBook> findByCategory(String category);

    List<GuideBook> findByDogAgeAndDogWeight(int dogAge, int dogWeight);

    @Query("select gb from GuideBook gb where gb.dogAge = :targetAge and gb.dogWeight < 9999 ")
    List<GuideBook> findByDogAgeEquals(@Param("targetAge") int targetAge);

    @Query("select gb from GuideBook gb where gb.dogWeight = :targetWeight and gb.dogAge < 9999 ")
    List<GuideBook> findByDogWeightEquals(@Param("targetWeight") int targetWeight);

}
