package com.ssafy.aejimeongji.domain.entity;

import com.ssafy.aejimeongji.domain.entity.image.GuideThumbnail;
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

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "thumbnail_id")
    private GuideThumbnail thumbnail;

    public GuideBook(String title, String content, String category, int dogAge, int dogWeight) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.dogAge = dogAge;
        this.dogWeight = dogWeight;
    }

    public GuideBook(String title, String content, String category, int dogAge, int dogWeight, GuideThumbnail thumbnail) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.dogAge = dogAge;
        this.dogWeight = dogWeight;
        this.thumbnail = thumbnail;
    }

    public void updateGuideBook(String title, String content, String category, int dogAge, int dogWeight) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.dogAge = dogAge;
        this.dogWeight = dogWeight;
    }

    public void updateGuideBook(String title, String content, String category, int dogAge, int dogWeight, GuideThumbnail thumbnail) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.dogAge = dogAge;
        this.dogWeight = dogWeight;
        this.thumbnail = thumbnail;
    }
}
