package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.member.DuplicationCheckResponse;
import com.ssafy.aejimeongji.api.dto.member.MemberModifyRequest;
import com.ssafy.aejimeongji.api.dto.member.MemberProfileResponse;
import com.ssafy.aejimeongji.api.dto.member.MemberSignUpRequest;
import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberService memberService;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/auth/duplicationcheck")
    public ResponseEntity<DuplicationCheckResponse> checkDuplicated(@RequestBody DuplicatedCheckCondition condition) {
        boolean resultStatus = memberService.duplicatedCheck(condition);
        String message = makeDuplicateCheckResponseMessage(condition, resultStatus);
        if (resultStatus)
            return ResponseEntity.ok().body(new DuplicationCheckResponse(resultStatus, message));
        return ResponseEntity.badRequest().body(new DuplicationCheckResponse(resultStatus, message));
    }

    @GetMapping("/member/{memberId}/profile")
    public ResponseEntity<MemberProfileResponse> showMemberProfile(@PathVariable Long memberId) {
        log.info("회원정보조회 요청 = {}", memberId);
        Member member = memberService.findMember(memberId);
        return ResponseEntity.ok().body(new MemberProfileResponse(member));
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseDTO> signup(@RequestBody MemberSignUpRequest request) {
        log.info("회원가입 요청");
        memberService.joinMember(request.convertMember(passwordEncoder));
        return ResponseEntity.ok(new ResponseDTO("회원가입이 완료되었습니다."));
    }

    @PutMapping("/member/{memberId}")
    public ResponseEntity<ResponseDTO> modifyProfile(@PathVariable Long memberId, @RequestBody MemberModifyRequest request) {
        log.info("회원정보수정 요청 = {}", memberId);
        memberService.updateMember(memberId, request.getNickname(), request.getPassword(), request.getPhoneNumber());
        return ResponseEntity.ok(new ResponseDTO("회원 정보 수정이 완료되었습니다."));
    }

    @DeleteMapping("/member/{memberId}")
    public ResponseEntity<ResponseDTO> deleteMember(@PathVariable Long memberId) {
        log.info("회원탈퇴 요청 = {}", memberId);
        memberService.deleteMember(memberId);
        return ResponseEntity.ok(new ResponseDTO("회원탈퇴가 완료되었습니다."));
    }

    private String makeDuplicateCheckResponseMessage(DuplicatedCheckCondition condition, boolean resultStatus) {
        String message = resultStatus ? "사용가능한 " : "이미 존재하는 ";
        message += addMessage(condition);
        return message;
    }

    private String addMessage(DuplicatedCheckCondition condition) {
        return condition.getEmail() != null ? "이메일입니다." : "닉네임입니다.";
    }
}
