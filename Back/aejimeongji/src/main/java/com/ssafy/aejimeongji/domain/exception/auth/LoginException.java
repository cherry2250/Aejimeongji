package com.ssafy.aejimeongji.domain.exception.auth;

import com.ssafy.aejimeongji.domain.exception.auth.AuthException;

public class LoginException extends AuthException {

    public LoginException() {
        super("이메일 혹은 패스워드를 다시 확인해주세요.");
    }
}
