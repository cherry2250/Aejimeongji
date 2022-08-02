package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Breed;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.entity.Gender;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.time.LocalDate;

import static org.assertj.core.api.Assertions.*;

@Transactional
@SpringBootTest
class DogServiceTest {

    @Autowired
    DogRepository dogRepository;
    @Autowired
    DogService dogService;
    @PersistenceContext
    EntityManager em;

    @Test
    void findDogTest() {
        // given
        Member member = new Member("test@ssafy.com", "1234", "테스트", "01012341234", "test");
        em.persist(member);
        Breed breed = new Breed("푸들");
        em.persist(breed);

        Dog dog = Dog.builder()
                .name("강아지")
                .weight(3.1)
                .birthdate(LocalDate.of(2020, 2, 2))
                .adoptedDay(LocalDate.of(2020, 2, 3))
                .gender(Gender.Male)
                .neutering(true)
                .gone(false)
                .member(member)
                .breed(breed)
                .build();
        Long savedDogId = dogRepository.save(dog).getId();

        // when
        Dog findDog = dogService.findDog(savedDogId);

        //then
        assertThat(findDog).isEqualTo(dog);
    }

    @Test
    void saveDogTest() {
        // given
        Member member = new Member("test@ssafy.com", "1234", "테스트", "01012341234", "test");
        em.persist(member);
        Breed breed = new Breed("푸들");
        em.persist(breed);

        Dog dog = Dog.builder()
                .name("강아지")
                .weight(3.1)
                .birthdate(LocalDate.of(2020, 2, 2))
                .adoptedDay(LocalDate.of(2020, 2, 3))
                .gender(Gender.Male)
                .neutering(true)
                .gone(false)
                .member(member)
                .breed(breed)
                .build();

        // when
        Dog savedDog = dogService.findDog(dogRepository.save(dog).getId());

        // then
        assertThat(savedDog.getName()).isEqualTo("강아지");
        assertThat(dog.getWeight()).isEqualTo(3.1);
        assertThat(savedDog.getBirthdate()).isEqualTo(LocalDate.of(2020, 2, 2));
        assertThat(savedDog.getAdoptedDay()).isEqualTo(LocalDate.of(2020, 2, 3));
        assertThat(savedDog.getGender()).isEqualTo(Gender.Male);
        assertThat(savedDog.getNeutering()).isEqualTo(true);
        assertThat(savedDog.getGone()).isEqualTo(false);
        assertThat(savedDog.getMember().getUsername()).isEqualTo("테스트");
        assertThat(savedDog.getBreed().getBreedName()).isEqualTo("푸들");
    }

    @Test
    void updateDogTest() {
        // given
        Member member = new Member("test@ssafy.com", "1234", "테스트", "01012341234", "test");
        em.persist(member);
        Breed breed = new Breed("푸들");
        em.persist(breed);

        Dog dog = Dog.builder()
                .name("강아지")
                .weight(3.1)
                .birthdate(LocalDate.of(2020, 2, 2))
                .adoptedDay(LocalDate.of(2020, 2, 3))
                .gender(Gender.Male)
                .neutering(true)
                .gone(false)
                .member(member)
                .breed(breed)
                .build();
        Long savedId = dogRepository.save(dog).getId();

        // when
        Breed newBreed = new Breed("포메라니안");
        em.persist(newBreed);

        dogService.updateDog(savedId, "강아지수정", 3.3, LocalDate.of(2020, 2, 2),
                LocalDate.of(2020, 5, 3), newBreed);

        // then
        assertThat(dog.getName()).isEqualTo("강아지수정");
        assertThat(dog.getWeight()).isEqualTo(3.3);
        assertThat(dog.getAdoptedDay()).isEqualTo("2020-05-03");
        assertThat(dog.getBreed().getBreedName()).isEqualTo("포메라니안");
    }

    @Test
    void deleteDog() {
        // given
        Member member = new Member("test@ssafy.com", "1234", "테스트", "01012341234", "test");
        em.persist(member);
        Breed breed = new Breed("푸들");
        em.persist(breed);

        Dog dog = Dog.builder()
                .name("강아지")
                .weight(3.1)
                .birthdate(LocalDate.of(2020, 2, 2))
                .adoptedDay(LocalDate.of(2020, 2, 3))
                .gender(Gender.Male)
                .neutering(true)
                .gone(false)
                .member(member)
                .breed(breed)
                .build();
        Long savedId = dogRepository.save(dog).getId();

        // when
        dogService.deleteDog(savedId);

        // then
        Assertions.assertThrows(IllegalArgumentException.class, () -> dogService.findDog(savedId));
    }
}