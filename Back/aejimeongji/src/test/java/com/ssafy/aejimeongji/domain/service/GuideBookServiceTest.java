package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.repository.GuideBookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;

@Transactional
@SpringBootTest
class GuideBookServiceTest {

    @Autowired
    GuideBookRepository guideBookRepository;
    @Autowired
    GuideBookService guideBookService;

    @BeforeEach
    public void beforeEach() {
        guideBookService = new GuideBookService(guideBookRepository);
    }

    @Test
    void findGuideBookListTest() {
        // given
        GuideBook guideBook1 = new GuideBook("제목1", "내용1", "의료", 10);
        Long id1 = guideBookRepository.save(guideBook1).getId();
        GuideBook guideBook2 = new GuideBook("제목2", "내용2", "음식", 5);
        Long id2 = guideBookRepository.save(guideBook2).getId();

        // when
        List<GuideBook> guideBookList = guideBookService.findGuideBookList();

        // then
        assertThat(guideBookList.size()).isEqualTo(2);
    }

    @Test
    void findGuideBookTest() {
        // given
        GuideBook guideBook = new GuideBook("제목1", "내용1", "의료", 10);
        Long id = guideBookRepository.save(guideBook).getId();

        // when
        GuideBook findGuideBook = guideBookService.findGuideBook(id);

        // then
        assertThat(findGuideBook).isEqualTo(guideBook);
    }

    @Test
    void saveGuideBookTest() {
        // given
        GuideBook guideBook1 = new GuideBook("제목1", "내용1", "의료", 10);

        // when
        Long savedGuideBook1 = guideBookService.saveGuideBook(guideBook1);

        // then
        GuideBook findGuideBook1 = guideBookService.findGuideBook(savedGuideBook1);
        assertThat(guideBook1.getTitle()).isEqualTo("제목1");
        assertThat(guideBook1.getContent()).isEqualTo("내용1");
        assertThat(guideBook1.getCategory()).isEqualTo("의료");
        assertThat(guideBook1.getDogAge()).isEqualTo(10);
    }
}