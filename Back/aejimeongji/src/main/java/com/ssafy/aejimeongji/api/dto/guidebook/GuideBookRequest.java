package com.ssafy.aejimeongji.api.dto.guidebook;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.entity.image.GuideThumbnail;
import com.ssafy.aejimeongji.domain.entity.image.Image;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GuideBookRequest {
    private String title;
    private String content;
    private String category;
    private int dogAge;
    private int dogWeight;
    private MultipartFile thumbnail;

    public GuideBook convertGuideBook(Image image) {
        return new GuideBook(getTitle(), getContent(), getCategory(), getDogAge(), getDogWeight(), new GuideThumbnail(image));
    }
}
