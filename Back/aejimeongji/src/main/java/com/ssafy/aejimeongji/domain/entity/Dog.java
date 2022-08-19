package com.ssafy.aejimeongji.domain.entity;

<<<<<<< HEAD
import lombok.AccessLevel;
=======
import com.ssafy.aejimeongji.domain.entity.image.DogImage;
import lombok.AccessLevel;
import lombok.Builder;
>>>>>>> develop
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "dog")
public class Dog extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

<<<<<<< HEAD
    private LocalDate birthdate;
=======
    private double weight;

    private LocalDate birthday;
>>>>>>> develop

    @Enumerated(EnumType.STRING)
    private Gender gender;

    private Boolean neutering;

    private Boolean gone;

<<<<<<< HEAD
    private LocalDate adoptedDay;
=======
    private LocalDate adoptionDay;
>>>>>>> develop

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "image_id")
    private DogImage image;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "breed_id")
    private Breed breed;

<<<<<<< HEAD
    public Dog(String name, LocalDate birthdate, Gender gender, Boolean neutering, Boolean gone, LocalDate adoptedDay, Member member, DogImage image, Breed breed) {
        this.name = name;
        this.birthdate = birthdate;
        this.gender = gender;
        this.neutering = neutering;
        this.gone = gone;
        this.adoptedDay = adoptedDay;
=======
    @Builder
    public Dog(String name, double weight, LocalDate birthday, Gender gender, Boolean neutering, Boolean gone, LocalDate adoptionDay, Member member, DogImage image, Breed breed) {
        this.name = name;
        this.weight = weight;
        this.birthday = birthday;
        this.gender = gender;
        this.neutering = neutering;
        this.gone = gone;
        this.adoptionDay = adoptionDay;
>>>>>>> develop
        this.member = member;
        this.image = image;
        this.breed = breed;
    }
<<<<<<< HEAD
=======

    public void updateDog(String name, double weight, LocalDate birthday, LocalDate adoptionDay, Breed breed) {
        this.name = name;
        this.weight = weight;
        this.birthday = birthday;
        this.adoptionDay = adoptionDay;
        this.breed = breed;
    }

    public void changeDogProfileImage(DogImage dogImage) {
        this.image = dogImage;
    }
>>>>>>> develop
}
