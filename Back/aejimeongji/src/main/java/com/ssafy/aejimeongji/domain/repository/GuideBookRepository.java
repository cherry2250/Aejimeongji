package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GuideBookRepository extends JpaRepository<GuideBook, Long> {

    List<GuideBook> findByCategory(String category);

}
