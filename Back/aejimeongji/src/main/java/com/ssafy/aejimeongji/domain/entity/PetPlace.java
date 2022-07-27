package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "petplace")
public class PetPlace {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String description;

    private String address;

    private String tel;

    private String category;

    private String lat;

    private String lng;

    private String openingHours;

    public PetPlace(String name, String description, String address, String tel, String category, String lat, String lng, String openingHours) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.tel = tel;
        this.category = category;
        this.lat = lat;
        this.lng = lng;
        this.openingHours = openingHours;
    }
}
