package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookRequest;
import com.ssafy.aejimeongji.domain.entity.image.GuideThumbnail;
import com.ssafy.aejimeongji.domain.entity.image.Image;
import com.ssafy.aejimeongji.domain.service.GuideBookService;
import com.ssafy.aejimeongji.domain.util.ImageUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Slf4j
@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminApiController {

    private final GuideBookService guideBookService;
    private final ImageUtil imageUtil;

    @PostMapping("/guide")
    public ResponseEntity<ResponseDTO> saveGuideBook(@ModelAttribute GuideBookRequest request) throws IOException {
        log.info("가이드북 등록 요청");
        Image image = imageUtil.storeImage(request.getThumbnail());
        guideBookService.saveGuideBook(request.convertGuideBook(image));
        return ResponseEntity.ok(new ResponseDTO("가이드북 등록이 완료되었습니다."));
    }

    @PutMapping("/guide/{guideId}")
    public ResponseEntity<ResponseDTO> updateGuideBook(@PathVariable Long guideId, @ModelAttribute GuideBookRequest request) throws IOException {
        log.info("가이드북 {} 수정 요청", guideId);
        Image image = imageUtil.storeImage(request.getThumbnail());
        Long updatedId = guideBookService.updateGuideBook(guideId, request.getTitle(), request.getContent(), request.getCategory(), request.getDogAge(), request.getDogWeight(), new GuideThumbnail(image));
        return ResponseEntity.ok(new ResponseDTO("가이드북 " + updatedId + " 수정이 완료되었습니다."));
    }

    @DeleteMapping("/guide/{guideId}")
    public ResponseEntity<ResponseDTO> deleteGuideBook(@PathVariable Long guideId) {
        log.info("가이드북 {} 삭제 요청", guideId);
        guideBookService.deleteGuideBook(guideId);
        return ResponseEntity.ok().body(new ResponseDTO("가이드북 " + guideId + " 삭제가 완료되었습니다."));
    }
}
