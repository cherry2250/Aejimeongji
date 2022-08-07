package com.ssafy.aejimeongji.domain.entity;

import com.ssafy.aejimeongji.domain.entity.Member;
import lombok.Data;
import lombok.Getter;

@Getter
public class UserProfile {
    private final String oauthId;
    private final String email;

    public UserProfile(String oauthId, String email) {
        this.oauthId = oauthId;
        this.email = email;
    }

    public Member toMember() {
        return Member.builder()
                .email(email)
                .oauthId(oauthId)
                .build();
    }
}
