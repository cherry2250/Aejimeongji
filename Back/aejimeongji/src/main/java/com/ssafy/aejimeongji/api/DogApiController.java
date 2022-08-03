package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.dog.DogProfileResponse;
import com.ssafy.aejimeongji.api.dto.dog.DogSaveRequest;
import com.ssafy.aejimeongji.api.dto.dog.DogUpdateRequest;
import com.ssafy.aejimeongji.domain.entity.Breed;
import com.ssafy.aejimeongji.domain.entity.Dog;
import com.ssafy.aejimeongji.domain.entity.DogImage;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.service.BreedService;
import com.ssafy.aejimeongji.domain.service.DogService;
import com.ssafy.aejimeongji.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/member/{memberId}/dog")
@RequiredArgsConstructor
public class DogApiController {

    private final DogService dogService;
    private final BreedService breedService;
    private final MemberService memberService;

    @GetMapping("")
    public ResponseEntity<List<DogProfileResponse>> getDogList(@PathVariable("memberId") Long memberId) {
        log.info("사용자 {}의 강아지 프로필 목록 조회 요청", memberId);
        List<Dog> dogList = dogService.findDogList(memberId);
        List<DogProfileResponse> dogProfileResponseList = dogList.stream()
                .map(DogProfileResponse::toDTO).collect(Collectors.toList());
        return ResponseEntity.ok().body(dogProfileResponseList);
    }

    @GetMapping("/{dogId}/profile")
    public ResponseEntity<DogProfileResponse> getDog(@PathVariable("memberId") Long memberId, @PathVariable("dogId") Long dogId) {
        log.info("강아지 프로필 {} 상세 정보 요청", dogId);
        Dog dog = dogService.findDog(dogId);
        return ResponseEntity.ok().body(new DogProfileResponse(dog));
    }

    @PostMapping("")
    public ResponseEntity<ResponseDTO> saveDog(@PathVariable("memberId") Long memberId, @RequestBody DogSaveRequest request) {
        log.info("강아지 프로필 등록 요청");
        Member member = memberService.findMember(memberId);
        Breed breed = breedService.findBreed(request.getBreed().getBreedName());
        DogImage image = new DogImage("originTestName", "storeTestName");   // 이미지 아직 없음
        Long savedId = dogService.saveDog(request.convertDog(member, breed, image));
        return ResponseEntity.ok(new ResponseDTO("강아지 프로필 " + savedId + " 등록이 완료되었습니다."));
    }

    @PutMapping("/{dogId}")
    public ResponseEntity<ResponseDTO> updateDog(@PathVariable("memberId") Long memberId, @PathVariable("dogId") Long dogId, @RequestBody DogUpdateRequest request) {
        log.info("강아지 프로필 {} 수정 요청", dogId);
        Breed breed = breedService.findBreed(request.getBreed().getBreedName());
        Long updatedId = dogService.updateDog(dogId, request.getName(), request.getWeight(), request.getBirthdate(), request.getAdoptedDay(), breed);
        return ResponseEntity.ok(new ResponseDTO("강아지 프로필 "+ updatedId + " 수정이 완료되었습니다."));
    }

    @DeleteMapping("/{dogId}")
    public ResponseEntity<ResponseDTO> deleteDog(@PathVariable("memberId") Long memberId, @PathVariable("dogId") Long dogId) {
        log.info("강아지 프로필 {} 삭제 요청", dogId);
        dogService.deleteDog(dogId);
        return ResponseEntity.ok(new ResponseDTO("강아지 프로필 "+ dogId + " 삭제가 완료되었습니다."));
    }
}
