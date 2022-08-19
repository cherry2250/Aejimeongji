package com.ssafy.aejimeongji.domain.exception.auth;

public class AuthException extends RuntimeException {
    public AuthException(String message) {
        super(message);
    }
}
