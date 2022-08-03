package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Breed;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.entity.DogImage;
import com.ssafy.aejimeongji.domain.repository.BreedRepository;
import com.ssafy.aejimeongji.domain.repository.DogRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DogService {

    private final DogRepository dogRepository;

    // 강아지 프로필 목록 조회
    public List<Dog> findDogList(Long memberId) {
        List<Dog> dogList = dogRepository.findDogsByMemberId(memberId);
        dogList.forEach(
                dog -> dog.getBreed().getBreedName()
        );
        return dogList;
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

    public DogImage getDogProfileImage(Long dogId) {
        return findDog(dogId).getImage();
    }

    @Transactional
    public Long changeProfileImage(Long dogId, DogImage image) {
        Dog dog = findDog(dogId);
        dog.changeDogProfileImage(image);
        return image.getId();
    }

    @Transactional
    public void deleteProfileImage(Long dogId) {
        Dog dog = findDog(dogId);
        dog.changeDogProfileImage(null);
    }
}
