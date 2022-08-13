package com.ssafy.aejimeongji.api.dto.pushalert;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FcmRequest {

    private String targetToken;
    private String title;
    private String body;
}
