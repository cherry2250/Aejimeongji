package com.ssafy.aejimeongji.api.dto.image;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class DogProfileImageRequest {
    private MultipartFile image;
}
