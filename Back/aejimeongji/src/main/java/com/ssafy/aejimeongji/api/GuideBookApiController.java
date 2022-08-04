package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookRequest;
import com.ssafy.aejimeongji.api.dto.guidebook.GuideBookResponse;
import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.service.GuideBookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/guide")
@RequiredArgsConstructor
public class GuideBookApiController {

    private final GuideBookService guideBookService;

    // 강아지 맞춤형 가이드 목록 조회 - 전체 목록 조회 로직까지 구현됨
    @GetMapping("/dog/{dogId}")
    public ResponseEntity<List<GuideBookResponse>> getGuideBookList(@PathVariable Long dogId) {
        log.info("강아지 {} 맞춤 가이드 목록 요청", dogId);
        List<GuideBook> guideBookList = guideBookService.findGuideBookList();
        List<GuideBookResponse> guideBookResponseList = guideBookList.stream()
                .map(GuideBookResponse::toDTO).collect(Collectors.toList());
        return ResponseEntity.ok().body(guideBookResponseList);
    }

    @GetMapping("")
    public ResponseEntity<List<GuideBookResponse>> getGuideBookList(@RequestParam("category") String categoryName) {
        log.info("'{}' 카테고리 가이드 목록 요청", categoryName);
        List<GuideBook> guideBookList = guideBookService.findGuideBookList(categoryName);
        List<GuideBookResponse> guideBookResponseList = guideBookList.stream()
                .map(GuideBookResponse::toDTO).collect(Collectors.toList());
        return ResponseEntity.ok().body(guideBookResponseList);
    }

    @GetMapping("/{guideId}")
    public ResponseEntity<GuideBookResponse> getGuideBook(@PathVariable Long guideId) {
        log.info("가이드북 {}번 상세 정보 요청", guideId);
        GuideBook guideBook = guideBookService.findGuideBook(guideId);
        return ResponseEntity.ok().body(new GuideBookResponse(guideBook));
    }

    @PostMapping("")
    public ResponseEntity<ResponseDTO> saveGuideBook(@RequestBody GuideBookRequest request) {
        log.info("가이드북 등록 요청");
        Long savedId = guideBookService.saveGuideBook(request.convertGuideBook());
        return ResponseEntity.ok(new ResponseDTO("가이드북 " + savedId + " 등록이 완료되었습니다."));
    }

    @PutMapping("/{guideId}")
    public ResponseEntity<ResponseDTO> updateGuideBook(@PathVariable Long guideId, @RequestBody GuideBookRequest request) {
        log.info("가이드북 {} 수정 요청", guideId);
        Long updatedId = guideBookService.updateGuideBook(guideId, request.getTitle(), request.getContent(),
                request.getCategory(), request.getDogAge(), request.getDogWeight());
        return ResponseEntity.ok(new ResponseDTO("가이드북 " + updatedId + " 수정이 완료되었습니다."));
    }

    @DeleteMapping("/{guideId}")
    public ResponseEntity<ResponseDTO> deleteGuideBook(@PathVariable Long guideId) {
        log.info("가이드북 {} 삭제 요청", guideId);
        guideBookService.deleteGuideBook(guideId);
        return ResponseEntity.ok().body(new ResponseDTO("가이드북 " + guideId + " 삭제가 완료되었습니다."));
    }
}

