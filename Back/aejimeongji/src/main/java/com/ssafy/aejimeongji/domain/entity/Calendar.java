package com.ssafy.aejimeongji.domain.entity;

<<<<<<< HEAD
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
=======
import lombok.*;
>>>>>>> develop

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "calendar")
public class Calendar extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

<<<<<<< HEAD
    private String title;

=======
>>>>>>> develop
    private String content;

    private LocalDate date;

<<<<<<< HEAD
=======
    private Boolean isActive;

    private Boolean isAlert;

    private Boolean isInjection = false;

>>>>>>> develop
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dog_id")
    private Dog dog;

<<<<<<< HEAD
    public Calendar(String title, String content, LocalDate date) {
        this.title = title;
        this.content = content;
        this.date = date;
=======
    @Builder
    public Calendar(Dog dog, String content, LocalDate date, Boolean isActive, Boolean isAlert) {
        this.dog = dog;
        this.content = content;
        this.date = date;
        this.isActive = isActive;
        this.isAlert = isAlert;
    }

    public void updateCalendar(String content, LocalDate date, Boolean isActive, Boolean isAlert) {
        this.content = content;
        this.date = date;
        this.isActive = isActive;
        this.isAlert = isAlert;
    }

    public Calendar(Dog dog, String content, LocalDate date) {
        this.dog = dog;
        this.content = content;
        this.date = date;
        this.isActive = false;
        this.isAlert = false;
        this.isInjection = true;
    }

    public void setDog(Dog dog) {
        this.dog = dog;
>>>>>>> develop
    }
}
