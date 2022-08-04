package com.ssafy.aejimeongji.api.dto.dog;

import com.ssafy.aejimeongji.domain.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DogSaveRequest {

    private String name;
    private double weight;
    private LocalDate birthdate;
    private LocalDate adoptedDay;
    private Gender gender;
    private Boolean neutering;
    private Boolean gone;
    private Breed breed;

    public Dog convertDog(Member member, Breed breed, DogImage image){
        return new Dog(getName(), getWeight(), getBirthdate(), getGender(), getNeutering(),
                getGone(), getAdoptedDay(), member, image, breed);
    }
}
