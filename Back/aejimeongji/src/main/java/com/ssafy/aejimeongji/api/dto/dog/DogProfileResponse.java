package com.ssafy.aejimeongji.api.dto.dog;

import com.ssafy.aejimeongji.domain.entity.Breed;
import com.ssafy.aejimeongji.domain.entity.Dog;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class DogProfileResponse {
    private Long dogId;
    private String name;
    private LocalDate birthdate;
    private LocalDate adoptedDay;
    private String breedName;

    public DogProfileResponse(Dog dog) {
        dogId = dog.getId();
        name = dog.getName();
        birthdate = dog.getBirthdate();
        adoptedDay = dog.getAdoptedDay();
        breedName = dog.getBreed().getBreedName();
    }

}