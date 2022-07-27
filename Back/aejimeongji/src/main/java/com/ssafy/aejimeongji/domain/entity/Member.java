package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "member")
public class Member extends BaseTimeEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private String username;

    private String phoneNumber;

    private String nickname;

    @Enumerated(EnumType.STRING)
    private Role role;

    public Member(String email, String password, String username, String phoneNumber, String nickname) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.nickname = nickname;
        this.role = Role.ROLE_USER;
    }

    public void updateMember(String password, String nickname) {
        this.password = password;
        this.nickname = nickname;
    }
}
