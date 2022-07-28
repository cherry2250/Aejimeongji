package com.ssafy.aejimeongji.api.dto.member;

import com.ssafy.aejimeongji.domain.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberSignUpRequest {
    private String email;
    private String password;
    private String username;
    private String nickname;
    private String phoneNumber;

    public Member convertMember(PasswordEncoder passwordEncoder) {
        return new Member(getEmail(), passwordEncoder.encode(getPassword()), getUsername(), getPhoneNumber(), getNickname());
    }
}
