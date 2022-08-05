package com.ssafy.aejimeongji.api.dto.dog;

import com.ssafy.aejimeongji.domain.entity.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DogSaveRequest {

    private String name;
    private double weight;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthdate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate adoptedDay;
    private Gender gender;
    private Boolean neutering;
    private Boolean gone;
    private String breed;
    private MultipartFile image;

    public Dog convertDog(Member member, Breed breed, DogImage image){
        return new Dog(getName(), getWeight(), getBirthdate(), getGender(), getNeutering(),
                getGone(), getAdoptedDay(), member, image, breed);
    }
}
