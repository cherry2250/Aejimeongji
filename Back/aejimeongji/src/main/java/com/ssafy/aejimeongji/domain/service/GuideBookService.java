package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.repository.GuideBookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class GuideBookService {

    private final GuideBookRepository guideBookRepository;

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
        return guideBookRepository.save(guideBook).getId();
    }

    // 가이드 수정
    @Transactional
    public Long updateGuideBook(Long guideId, String newTitle, String newContent, String newCategory, int newDogAge, int newDogWeight) {
        GuideBook findGuide = findGuideBook(guideId);
        findGuide.updateGuideBook(newTitle, newContent, newCategory, newDogAge, newDogWeight);
        return findGuide.getId();
    }

    // 가이드 삭제
    @Transactional
    public void deleteGuideBook(Long guidId) {
        GuideBook findGuide = findGuideBook(guidId);
        guideBookRepository.delete(findGuide);
    }
}
