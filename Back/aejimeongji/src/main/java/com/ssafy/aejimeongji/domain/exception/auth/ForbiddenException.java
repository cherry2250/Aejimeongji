package com.ssafy.aejimeongji.domain.exception.auth;

public class ForbiddenException extends AuthException {
    public ForbiddenException() {
        super("접근 권한이 없습니다.");
    }
}
