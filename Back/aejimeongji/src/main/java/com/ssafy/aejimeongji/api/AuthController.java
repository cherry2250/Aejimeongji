package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.api.dto.login.LoginRequest;
import com.ssafy.aejimeongji.api.dto.login.LoginResponse;
import com.ssafy.aejimeongji.api.dto.member.DuplicationCheckResponse;
import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.service.AuthService;
import com.ssafy.aejimeongji.domain.service.MemberService;
import com.ssafy.aejimeongji.security.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final MemberService memberService;
    private final TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        Long memberId = authService.login(request.getEmail(), request.getPassword());

        String refreshToken = authService.createRefreshToken(memberId);
        Member member = memberService.findMember(memberId);
        String accessToken = tokenProvider.createAccessToken(member);

        return ResponseEntity.ok().body(new LoginResponse("로그인되었습니다.", accessToken, refreshToken));
    }

    @PostMapping("/logout")
    public ResponseEntity<ResponseDTO> logout(@RequestBody Map<String, String> request) {
        String refreshToken = request.get("refreshToken");
        authService.logout(refreshToken);
        return ResponseEntity.ok().body(new ResponseDTO("로그아웃되었습니다."));
    }


    @PostMapping("/duplicationcheck")
    public ResponseEntity<DuplicationCheckResponse> checkDuplicated(@RequestBody DuplicatedCheckCondition condition) {
        boolean resultStatus = authService.duplicatedCheck(condition);
        String message = makeDuplicateCheckResponseMessage(condition, resultStatus);
        if (resultStatus)
            return ResponseEntity.ok().body(new DuplicationCheckResponse(resultStatus, message));
        return ResponseEntity.badRequest().body(new DuplicationCheckResponse(resultStatus, message));
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
