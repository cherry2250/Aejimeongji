package com.ssafy.aejimeongji.domain.exception;

public class LoginException extends IllegalArgumentException {

    public LoginException() {
        super("이메일 혹은 패스워드를 다시 확인해주세요.");
    }

    public LoginException(String s) {
        super(s);
    }

    public LoginException(String message, Throwable cause) {
        super(message, cause);
    }

    public LoginException(Throwable cause) {
        super(cause);
    }
}
