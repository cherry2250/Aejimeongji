package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
<<<<<<< HEAD
=======
import org.springframework.security.crypto.password.PasswordEncoder;
>>>>>>> develop

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

<<<<<<< HEAD
    @Enumerated(EnumType.STRING)
    private Role role;

=======
    private String refreshToken;

    @Enumerated(EnumType.STRING)
    private Role role;

    public Member(String email, String nickname) {
        this.email = email;
        this.nickname = nickname;
    }

>>>>>>> develop
    public Member(String email, String password, String username, String phoneNumber, String nickname) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.nickname = nickname;
        this.role = Role.ROLE_USER;
    }

<<<<<<< HEAD
    public void updateMember(String password, String nickname) {
        this.password = password;
        this.nickname = nickname;
=======
    public void updateMember(String nickname, String password, String phoneNumber) {
        this.password = password;
        this.nickname = nickname;
        this.phoneNumber = phoneNumber;
    }

    public void createRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
    }

    public void deleteRefreshToken() {
        this.refreshToken = null;
    }

    public boolean matchPassword(PasswordEncoder passwordEncoder, String inputPassword) {
        return passwordEncoder.matches(inputPassword, password);
>>>>>>> develop
    }
}
