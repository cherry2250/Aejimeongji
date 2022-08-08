package com.ssafy.aejimeongji.domain.exception.auth;

import com.ssafy.aejimeongji.domain.exception.auth.AuthException;

public class NotExistTokenException extends AuthException {
    public NotExistTokenException() {
        super("토큰이 존재하지 않습니다.");
    }
}
