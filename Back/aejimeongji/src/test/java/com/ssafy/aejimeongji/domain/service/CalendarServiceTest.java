package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.*;
import com.ssafy.aejimeongji.domain.repository.CalendarRepository;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import com.ssafy.aejimeongji.domain.repository.TodosRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Table;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class CalendarServiceTest {

    @Autowired
    CalendarRepository calendarRepository;

    @Autowired
    TodosRepository todosRepository;

    @Autowired
    CalendarService calendarService;

    @PersistenceContext
    EntityManager em;

    @Autowired
    DogRepository dogRepository;

    @Test
    void findDogTest() {
        //given
        Member member = new Member("ssafy@naver.com", "닉네임");
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        Breed breed = new Breed("breedTest");

        //when
        Dog dog = new Dog("DogTest", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);

        //then
        assertEquals("DogTest", dog.getName(), "성공");

    }

    @Test
    void findTodoTest() {
        //given
        Member member = new Member("ssafy@naver.com", "닉네임");
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        Breed breed = new Breed("breedTest");
        Dog dog = new Dog("DogTest", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);

        Calendar calendar = new Calendar(dog, "내용1", LocalDate.now(), false, false);
        em.persist(calendar);

        //when
        Calendar calendarTest = calendarService.findTodo(calendar.getId());

        //then
        assertEquals("내용1", calendarTest.getContent(), "성공");

    }

    @Test
    void findCalendarTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Dog dog2 = new Dog("DogTest2", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog2);

        //when
        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), false, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog2, "내용2" , LocalDate.now(), false, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        List<Calendar> calendars = calendarService.findCalendar(calendar1.getDog().getId());

        //then
        assertEquals(2, calendars.size());
    }

    @Test
    void createCalendarTest() {
        //given
        Member member = new Member("ssafy@naver.com", "닉네임");
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        Breed breed = new Breed("breedTest");

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);

        //when
        Calendar calendar1 = new Calendar(dog1, "내용1" , LocalDate.now(), false, false);
        Long calendarId = calendarService.createCalendar(calendar1);

        //then
        assertEquals(1, calendarId);

    }

    @Test
    void updateCalendarTest() {
        //given
        Member member = new Member("ssafy@naver.com", "닉네임");
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        Breed breed = new Breed("breedTest");

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);

        //when
        Calendar calendar1 = new Calendar(dog1,"내용1" , LocalDate.now(), false, false);
        Long calendarId = calendarService.createCalendar(calendar1);
        Long updateCalendarId = calendarService.updateCalendar(calendarId, "수정내용", LocalDate.now(), false, false);

        //then
        assertEquals(1, calendarId);
        assertEquals(1, updateCalendarId);

    }

    @Test
    void deleteCalendarTest() {
        //given
        Member member = new Member("ssafy@naver.com", "닉네임");
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        Breed breed = new Breed("breedTest");

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);

        //when
        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), false, false);
        Long calendarId = calendarService.createCalendar(calendar1);
        calendarService.deleteCalendar(calendarId);

        //then
        Assertions.assertThrows(IllegalArgumentException.class, () -> calendarService.findTodo(calendarId));
    }

    @Test
    void findTodosAllTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), true, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog1, "내용2" , LocalDate.now(), true, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        //when
        calendarService.saveMainTodos(new Todos(dog1, calendar1));
        calendarService.saveMainTodos(new Todos(dog1, calendar2));

        List<Todos> todosAll = calendarService.findTodosAll();

        //then
        assertEquals(2, todosAll.size());

    }

    @Test
    void findTodosTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), true, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog1, "내용2" , LocalDate.now(), true, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        //when
        Todos todos = calendarService.findTodos(calendarService.saveMainTodos(new Todos(dog1, calendar1)));

        calendarService.saveMainTodos(new Todos(dog1, calendar2));

        //then
        assertEquals("DogTest1", todos.getDog().getName());
    }

    @Test
    void findMainTodosTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), true, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog1, "내용2" , LocalDate.now(), true, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        //when
        calendarService.saveMainTodos(new Todos(dog1, calendar1));
        calendarService.saveMainTodos(new Todos(dog1, calendar2));

        List<Todos> todos = calendarService.findMainTodos(dog1.getId());

        //then
        assertEquals(2, todos.size());
    }

    @Test
    void findTodosByCalendarTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), true, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog1, "내용2" , LocalDate.now(), true, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        //when
        calendarService.saveMainTodos(new Todos(dog1, calendar1));
        calendarService.saveMainTodos(new Todos(dog1, calendar2));

        Todos todos = calendarService.findTodosByCalendar(calendar1.getId());

        //then
        assertEquals(calendar1.getDog(), todos.getDog());
    }

    @Test
    void saveMainTodosTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), true, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog1, "내용2" , LocalDate.now(), true, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        //when
        Todos todos = new Todos(dog1, calendar1);
        Long id = calendarService.saveMainTodos(todos);
        calendarService.saveMainTodos(new Todos(dog1, calendar2));

        //then
        assertEquals(id, todos.getId());
    }

    @Test
    void deleteMainTodosTest() {
        //given
        Member member = new Member("ssafy@naver.com", "1234", "닉네임", "01010101010", "이름");
        em.persist(member);
        DogImage dogImage = new DogImage("filename1", "storeFilename");
        em.persist(dogImage);
        Breed breed = new Breed("breedTest");
        em.persist(breed);

        Dog dog1 = new Dog("DogTest1", LocalDate.now(), Gender.Male, false, false, LocalDate.now(), member,
                dogImage, breed);
        em.persist(dog1);

        Calendar calendar1 = new Calendar(dog1,  "내용1" , LocalDate.now(), true, false);
        em.persist(calendar1);
        Calendar calendar2 = new Calendar(dog1, "내용2" , LocalDate.now(), true, false);
        em.persist(calendar2);
        Calendar calendar3 = new Calendar(dog1,  "내용3" , LocalDate.now(), false, false);
        em.persist(calendar3);

        //when
        Todos todos = new Todos(dog1, calendar1);
        Long id = calendarService.saveMainTodos(todos);
        calendarService.saveMainTodos(new Todos(dog1, calendar2));

        //then
        calendarService.deleteMainTodos(id);
        Assertions.assertThrows(IllegalArgumentException.class, () -> calendarService.findTodos(id));
    }
}