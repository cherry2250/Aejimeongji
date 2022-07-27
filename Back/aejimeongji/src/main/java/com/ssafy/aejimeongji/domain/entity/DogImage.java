package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "dogimage")
public class DogImage extends Image {

    public DogImage(String originFilename, String storeFilename) {
        super(originFilename, storeFilename);
    }
}
