package com.ssafy.aejimeongji.api.dto.petPlace;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.ssafy.aejimeongji.domain.entity.PetPlace;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.locationtech.jts.geom.Point;

import static java.lang.Math.*;

@Data
@AllArgsConstructor
public class PetPlaceResponse {

    private Long id;
    private String name;
    private String description;
    private String address;
    private String tel;
    private String category;
    private String openingHours;
    @JsonBackReference
    private Point point;
    private Double distance;

    public PetPlaceResponse(PetPlace petPlace, Double lat, Double lng, Double x, Double y) {
        id = petPlace.getId();
        name = petPlace.getName();
        description = petPlace.getDescription();
        address = petPlace.getAddress();
        tel = petPlace.getTel();
        category = petPlace.getCategory();
        openingHours = petPlace.getOpeningHours();
        point = petPlace.getPoint();
        distance = (6371 * acos(cos(toRadians(lat)) * cos(toRadians(x)) * cos(toRadians(y) - toRadians(lng)) + sin(toRadians(lat)) * sin(toRadians(x))));

    }

    public PetPlaceResponse(PetPlace petPlace) {
        this.id = petPlace.getId();
        this.name = petPlace.getName();
        this.description = petPlace.getDescription();
        this.address = petPlace.getAddress();
        this.tel = petPlace.getTel();
        this.category = petPlace.getCategory();
        this.openingHours = petPlace.getOpeningHours();
    }
}