package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "guidebook")
public class GuideBook extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    private String content;

    private String category;

    private int dogAge;

    private int dogWeight;

    public GuideBook(String title, String content, String category, int dogAge, int dogWeight) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.dogAge = dogAge;
        this.dogWeight = dogWeight;
    }
    public void updateGuideBook(String title, String content, String category, int dogAge, int dogWeight) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.dogAge = dogAge;
        this.dogWeight = dogWeight;
    }
}
