package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.condition.DuplicatedCheckCondition;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.exception.LoginException;
import com.ssafy.aejimeongji.domain.exception.MemberNotFoundException;
import com.ssafy.aejimeongji.domain.repository.MemberRepository;
import com.ssafy.aejimeongji.security.TokenProvider;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AuthService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;

    public boolean duplicatedCheck(DuplicatedCheckCondition condition) {
        return memberRepository.duplicatedCheck(condition) ? false : true;
    }

    @Transactional
    public Long  login(String email, String inputPassword) {
        Member member = memberRepository.findByEmail(email)
                .orElseThrow(() -> new LoginException());
        if(!member.matchPassword(passwordEncoder, inputPassword)) {
            log.debug("로그인 실패");
            throw new LoginException();
        }
        return member.getId();
    }

    @Transactional
    public String createRefreshToken(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new LoginException());
        String refreshToken = tokenProvider.createRefreshToken(member);
        member.createRefreshToken(refreshToken);
        return refreshToken;
    }

    @Transactional
    public void logout(String refreshToken) {
        Member member = memberRepository.findByRefreshToken(refreshToken).orElseThrow(() -> new IllegalArgumentException("JWT 토큰이 유효하지 않습니다."));
        member.deleteRefreshToken();
    }
}
