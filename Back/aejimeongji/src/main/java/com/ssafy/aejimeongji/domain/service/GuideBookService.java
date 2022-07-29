package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.repository.GuideBookRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional(readOnly = true)
public class GuideBookService {

    private final GuideBookRepository guideBookRepository;

    public GuideBookService(GuideBookRepository guideBookRepository) {
        this.guideBookRepository = guideBookRepository;
    }

    // 강아지 맞춤형 가이드 목록 조회 - 전체 목록 조회 로직까지 구현됨
    public List<GuideBook> findGuideBookList() {
        return guideBookRepository.findAll();
    }

    // 가이드 상세 조회
    public GuideBook findGuideBook(Long guideBookId) {
        return guideBookRepository.findById(guideBookId)
                .orElseThrow(() -> new IllegalArgumentException("조회하신 가이드가 존재하지 않습니다."));
    }

    // 가이드 생성
    @Transactional
    public Long saveGuideBook(GuideBook guideBook) {
        System.out.println(guideBook);
        return guideBookRepository.save(guideBook).getId();
    }
}
