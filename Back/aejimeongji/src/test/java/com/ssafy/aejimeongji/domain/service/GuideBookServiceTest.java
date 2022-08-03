package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.repository.GuideBookRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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
    @PersistenceContext
    EntityManager em;

//    @Test
//    void findGuideBookListTest() {
//        // given
//        GuideBook guideBook1 = new GuideBook("제목1", "내용1", "의료", 10, 1);
//        Long id1 = guideBookRepository.save(guideBook1).getId();
//        GuideBook guideBook2 = new GuideBook("제목2", "내용2", "음식", 5, 2);
//        Long id2 = guideBookRepository.save(guideBook2).getId();
//
//        // when
//        List<GuideBook> guideBookList = guideBookService.findGuideBookList();
//
//        // then
//        assertThat(guideBookList.size()).isEqualTo(2);
//    }

    @Test
    void findGuideBookTest() {
        // given
        GuideBook guideBook = new GuideBook("제목1", "내용1", "의료", 10, 1);
        em.persist(guideBook);
        Long id = guideBookRepository.save(guideBook).getId();

        // when
        GuideBook findGuideBook = guideBookService.findGuideBook(id);

        // then
        assertThat(findGuideBook).isEqualTo(guideBook);
    }

    @Test
    void saveGuideBookTest() {
        // given
        GuideBook guideBook = new GuideBook("제목1", "내용1", "의료", 10, 1);
        em.persist(guideBook);

        // when
        Long savedGuideBookId = guideBookService.saveGuideBook(guideBook);
        GuideBook savedGuideBook = guideBookService.findGuideBook(savedGuideBookId);

        // then
        assertThat(savedGuideBook.getTitle()).isEqualTo("제목1");
        assertThat(savedGuideBook.getContent()).isEqualTo("내용1");
        assertThat(savedGuideBook.getCategory()).isEqualTo("의료");
        assertThat(savedGuideBook.getDogAge()).isEqualTo(10);
        assertThat(savedGuideBook.getDogWeight()).isEqualTo(1);
    }

    @Test
    void updateGuideBookTest() {
        // given
        GuideBook guideBook = new GuideBook("제목", "내용", "의료", 10, 1);
        em.persist(guideBook);
        Long savedGuideBookId = guideBookService.saveGuideBook(guideBook);

        // when
        guideBookService.updateGuideBook(savedGuideBookId, "new제목", "new내용",
                "미용", 1, 2);

        // then
        assertThat(guideBook.getTitle()).isEqualTo("new제목");
        assertThat(guideBook.getContent()).isEqualTo("new내용");
        assertThat(guideBook.getCategory()).isEqualTo("미용");
        assertThat(guideBook.getDogAge()).isEqualTo(1);
        assertThat(guideBook.getDogWeight()).isEqualTo(2);
    }

    @Test
    void deleteGuideBook() {
        // given
        GuideBook guideBook = new GuideBook("제목", "내용", "의료", 10, 1);
        em.persist(guideBook);
        Long savedGuideBookId = guideBookService.saveGuideBook(guideBook);

        // when
        guideBookService.deleteGuideBook(savedGuideBookId);

        // then
        Assertions.assertThrows(IllegalArgumentException.class, () -> guideBookService.findGuideBook(savedGuideBookId));
    }
}