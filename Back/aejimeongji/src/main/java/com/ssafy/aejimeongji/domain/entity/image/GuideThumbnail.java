package com.ssafy.aejimeongji.domain.entity.image;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "guide_thumbnail")
public class GuideThumbnail extends Image {

    public GuideThumbnail(Image image) {
        super(image.getOriginFilename(), image.getStoreFilename());
    }

}