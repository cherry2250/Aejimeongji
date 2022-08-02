package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Breed;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.repository.BreedRepository;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DogService {

    private final DogRepository dogRepository;
    private final BreedRepository breedRepository;

    // 견종 조회
    public Breed findBreed(String breedName) {
        return breedRepository.findBreedByBreedName(breedName);
    }

    // 강아지 프로필 상세 조회
    public Dog findDog(Long dogId) {
        Dog dog = dogRepository.findById(dogId)
                .orElseThrow(() -> new IllegalArgumentException("조회하신 강아지가 존재하지 않습니다."));
        dog.getBreed().getBreedName();
        return dog;
    }

    // 강아지 프로필 등록
    @Transactional
    public Long saveDog(Dog dog) {
        return dogRepository.save(dog).getId();
    }

    // 강아지 프로필 수정
    @Transactional
    public Long updateDog(Long dogId, String newName, double newWeight, LocalDate newBirthdate, LocalDate newAdoptedDay, Breed newBreed) {
        Dog findDog = findDog(dogId);
        findDog.updateDog(newName, newWeight, newBirthdate, newAdoptedDay, newBreed);
        return findDog.getId();
    }

    // 강아지 프로필 삭제
    @Transactional
    public void deleteDog(Long dogId) {
        Dog findDog = findDog(dogId);
        dogRepository.delete(findDog);
    }
}
