package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.phoneauth.PhoneAuthVerifyRequest;
import com.ssafy.aejimeongji.api.dto.phoneauth.PhoneAuthSendRequest;
import com.ssafy.aejimeongji.api.dto.phoneauth.PhoneAuthSendResponse;
import com.ssafy.aejimeongji.api.dto.ResponseDTO;
import com.ssafy.aejimeongji.domain.service.PhoneAuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.nurigo.java_sdk.exceptions.CoolsmsException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/phoneauth")
@RequiredArgsConstructor
public class PhoneAuthApiController {

    private final PhoneAuthService phoneAuthService;

    @PostMapping("/verify")
    public ResponseEntity<ResponseDTO> confirmAuthNumber(@RequestBody PhoneAuthVerifyRequest request) {
        boolean result = phoneAuthService.verifyAuthNumber(request.getPhoneUUID(), request.getAuthNumber());
        if (result) {
            log.info("{}번 UUID에서 인증이 완료되었습니다.", request.getPhoneUUID());
            return ResponseEntity.ok().body(new ResponseDTO("인증되었습니다."));
        }
        log.info("{}번 UUID에서 인증이 실패되었습니다.", request.getPhoneUUID());
        return ResponseEntity.badRequest().body(new ResponseDTO("인증번호를 다시 확인해주세요."));
    }

    @PostMapping
    public ResponseEntity<PhoneAuthSendResponse> sendMessage(@RequestBody PhoneAuthSendRequest request) throws CoolsmsException {
        String phoneUUID = phoneAuthService.sendMessage(request.getPhoneNumber());
        log.info("{}번으로 인증번호가 전송되었습니다.", request.getPhoneNumber());
        return ResponseEntity.ok().body(new PhoneAuthSendResponse("인증번호가 발송되었습니다.", phoneUUID));
    }
}
