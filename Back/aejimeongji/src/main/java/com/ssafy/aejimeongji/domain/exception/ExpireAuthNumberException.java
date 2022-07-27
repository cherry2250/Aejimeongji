package com.ssafy.aejimeongji.domain.exception;

import lombok.Getter;

@Getter
public class ExpireAuthNumberException extends RuntimeException {

    private Long UUID;

    public ExpireAuthNumberException(Long UUID) {
        super("휴대폰 인증 기한이 만료되었습니다.");
        this.UUID = UUID;
    }

    public ExpireAuthNumberException(String message) {
        super(message);
    }

    public ExpireAuthNumberException(String message, Throwable cause) {
        super(message, cause);
    }

    public ExpireAuthNumberException(Throwable cause) {
        super(cause);
    }
}
