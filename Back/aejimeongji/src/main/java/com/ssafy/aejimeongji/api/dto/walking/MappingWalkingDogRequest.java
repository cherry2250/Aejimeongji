package com.ssafy.aejimeongji.api.dto.walking;

import lombok.Data;

@Data
public class MappingWalkingDogRequest {
    private Long dogId;
    private Long walkingId;
    private double calories;
}
