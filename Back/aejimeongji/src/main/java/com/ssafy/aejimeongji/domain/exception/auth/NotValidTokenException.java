package com.ssafy.aejimeongji.domain.exception.auth;

import com.ssafy.aejimeongji.domain.exception.auth.AuthException;

public class NotValidTokenException extends AuthException {
    public NotValidTokenException() {
        super("토큰이 유효하지 않습니다.");
    }
}
