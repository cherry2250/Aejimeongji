package com.ssafy.aejimeongji.domain.entity.image;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "petplaceimage")
public class PetplaceImage extends Image {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "petplace_id")
    private PetPlace petPlace;

    public PetplaceImage(String originFilename, String storeFilename, PetPlace petPlace) {
        super(originFilename, storeFilename);
        this.petPlace = petPlace;
    }
}
