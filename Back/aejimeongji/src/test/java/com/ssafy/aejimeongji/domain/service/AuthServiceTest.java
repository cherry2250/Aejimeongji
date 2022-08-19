//package com.ssafy.aejimeongji.domain.service;
//
//import com.ssafy.aejimeongji.domain.entity.Member;
//import com.ssafy.aejimeongji.domain.exception.auth.LoginException;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.persistence.EntityManager;
//import javax.persistence.PersistenceContext;
//
//import static org.assertj.core.api.Assertions.*;
//import static org.junit.jupiter.api.Assertions.*;
//
//@SpringBootTest
//@Transactional
//class AuthServiceTest {
//
//    @Autowired
//    AuthService authService;
//    @PersistenceContext
//    EntityManager em;
//    @Autowired
//    PasswordEncoder passwordEncoder;
//
//    @BeforeEach
//    void beforeAll() {
//        em.persist(new Member("ssafy@ssafy.com", passwordEncoder.encode("1234"), "닉네임", "01012341234", "닉네임"));
//    }
//
//    @Test
//    void login_success() {
//        Long loginId = authService.login("ssafy@ssafy.com", "1234");
//        assertThat(loginId).isNotNull();
//    }
//
//    @Test
//    void login_fail1() {
//        assertThrows(LoginException.class, () -> authService.login("ssafy@ssafy.com", "12345"));
//    }
//
//    @Test
//    void login_fail2() {
//        assertThrows(LoginException.class, () -> authService.login("ssafy12345@ssafy.com", "1234"));
//    }
//
//    @Test
//    void createRefreshToken() {
//        Member member = new Member("ssafy12@ssafy.com", passwordEncoder.encode("1234"), "닉네임", "01012341234", "닉네임1234");
//        em.persist(member);
//        authService.createRefreshToken(member.getId());
//        assertThat(member.getRefreshToken()).isNotNull();
//        System.out.println("member.getRefreshToken() = " + member.getRefreshToken());
//    }
//
//    @Test
//    void logout() {
//        Member member = new Member("ssafy12@ssafy.com", passwordEncoder.encode("1234"), "닉네임", "01012341234", "닉네임1234");
//        em.persist(member);
//        String refreshToken = authService.createRefreshToken(member.getId());
//        assertThat(member.getRefreshToken()).isNotNull();
//        System.out.println("member.getRefreshToken() = " + member.getRefreshToken());
//
//        authService.logout(refreshToken);
//        assertThat(member.getRefreshToken()).isNull();
//    }
//}