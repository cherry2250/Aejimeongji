package com.ssafy.aejimeongji.domain.exception.auth;

public class RefreshTokenNotFoundException extends AuthException {
    public RefreshTokenNotFoundException() {
        super("토큰이 유효하지 않습니다.");
    }
}
