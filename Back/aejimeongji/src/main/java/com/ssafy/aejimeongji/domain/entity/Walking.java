package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "walking")
public class Walking {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String distance;

    private String walkingTime;

    private LocalDateTime walkingDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    public Walking(String distance, String walkingTime, LocalDateTime walkingDate, Member member) {
        this.distance = distance;
        this.walkingTime = walkingTime;
        this.walkingDate = walkingDate;
        this.member = member;
    }
}
