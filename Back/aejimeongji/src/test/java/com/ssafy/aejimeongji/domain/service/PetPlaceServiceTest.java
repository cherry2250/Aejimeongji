package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.repository.PetPlaceRepostiory;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Transactional
@SpringBootTest
class PetPlaceServiceTest {

    @Autowired
    private PetPlaceService petPlaceService;

    @Autowired
    private PetPlaceRepostiory petPlaceRepostiory;

    @PersistenceContext
    EntityManager em;

    @Test
    void getNearPetPlaceList() {
        //given


        //when
        List<PetPlace> list = petPlaceService.getNearPetPlaceList(37.0, 127.0, 100.0);

        //then
//        assertEquals(314, list.size());
//        test전용 db 추가 필요

    }

    @Test
    void findPetPlaceList() {
        //given
        int len = petPlaceRepostiory.findAll().size();

        //when
        int size = petPlaceService.findPetPlaceList().size();

        //then
        assertEquals(len, size);
    }

    @Test
    void findPetPlace() {
        //given
        PetPlace petPlace = new PetPlace("펫플", "내용", "주소"
                , "전화벊", "카테", null, "d", null);
        em.persist(petPlace);
        Long petPlaceId = petPlace.getId();

        //when
        PetPlace findPlace = petPlaceService.findPetPlace(petPlaceId);

        //then
        assertEquals(petPlace.getName(), findPlace.getName());

    }
}