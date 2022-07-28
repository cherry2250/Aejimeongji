package com.ssafy.aejimeongji.domain.exception;

public class MemberNotFoundException extends IllegalArgumentException {
    public MemberNotFoundException() {
        super("요청하신 회원이 존재하지 않습니다.");
    }
}
