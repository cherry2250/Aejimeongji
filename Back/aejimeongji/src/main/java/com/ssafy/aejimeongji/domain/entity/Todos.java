package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "todos")
public class Todos {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dog_id")
    private Dog dog;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "calendar_id")
    private Calendar calendar;

    public Todos(Dog dog, Calendar calendar) {
        this.dog = dog;
        this.calendar = calendar;
    }
}
