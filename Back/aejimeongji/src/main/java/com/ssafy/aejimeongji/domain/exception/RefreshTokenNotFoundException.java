package com.ssafy.aejimeongji.domain.exception;

public class RefreshTokenNotFoundException extends IllegalArgumentException {
    public RefreshTokenNotFoundException() {
        super("토큰이 유효하지 않습니다.");
    }
}
