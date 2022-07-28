package com.ssafy.aejimeongji.api.advice;

import com.ssafy.aejimeongji.api.dto.ErrorDTO;
import com.ssafy.aejimeongji.domain.exception.ExpireAuthNumberException;
import com.ssafy.aejimeongji.domain.exception.MemberNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class ControllerAdvice {

    @ExceptionHandler(ExpireAuthNumberException.class)
    public ResponseEntity<ErrorDTO> expireAuthNumberExHandler(ExpireAuthNumberException ex) {
        log.error("{}번 {}", ex.getUUID(), ex.getMessage());
        return ResponseEntity.badRequest().body(new ErrorDTO(400, ex.getMessage()));
    }

    @ExceptionHandler(MemberNotFoundException.class)
    public ResponseEntity<ErrorDTO> memberNotFoundExHandler(MemberNotFoundException ex) {
        log.error("{}번 회원 정보가 존재하지 않습니다. 요청거부", ex.getMemberId());
        return ResponseEntity.badRequest().body(new ErrorDTO(400, ex.getMessage()));
    }
}
