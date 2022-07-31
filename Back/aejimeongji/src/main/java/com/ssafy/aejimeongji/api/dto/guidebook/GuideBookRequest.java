package com.ssafy.aejimeongji.api.dto.guidebook;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GuideBookRequest {
    private String title;
    private String content;
    private String category;
    private int dogAge;

    public GuideBook convertGuideBook() {
        return new GuideBook(getTitle(), getContent(), getCategory(), getDogAge());
    }
}
