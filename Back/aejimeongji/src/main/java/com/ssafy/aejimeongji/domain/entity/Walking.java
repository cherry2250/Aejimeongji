package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "walking")
public class Walking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double distance;

    private String walkingTime;

    private LocalDateTime walkingDate;

    public Walking(double distance, String walkingTime, LocalDateTime walkingDate) {
        this.distance = distance;
        this.walkingTime = walkingTime;
        this.walkingDate = walkingDate;
    }
}
