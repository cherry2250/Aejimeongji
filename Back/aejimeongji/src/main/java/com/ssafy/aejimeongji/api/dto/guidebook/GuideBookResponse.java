package com.ssafy.aejimeongji.api.dto.guidebook;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class GuideBookResponse {
    private Long guideId;
    private String title;
    private String content;
    private String category;

    public GuideBookResponse(GuideBook guideBook) {
        guideId = guideBook.getId();
        title = guideBook.getTitle();
        content = guideBook.getContent();
        category = guideBook.getCategory();
    }

    public static GuideBookResponse toDTO(GuideBook guideBook) {
        return new GuideBookResponse(guideBook);
    }
}
