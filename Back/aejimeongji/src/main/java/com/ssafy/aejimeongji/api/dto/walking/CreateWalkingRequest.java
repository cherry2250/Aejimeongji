package com.ssafy.aejimeongji.api.dto.walking;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
public class CreateWalkingRequest {
    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime walkingDate;
    private String walkingTime;
    private double walkingDistance;
}
