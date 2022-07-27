package com.ssafy.aejimeongji.api.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class PhoneAuthVerifyRequest {
    private String phoneUUID;
    private String authNumber;
}
