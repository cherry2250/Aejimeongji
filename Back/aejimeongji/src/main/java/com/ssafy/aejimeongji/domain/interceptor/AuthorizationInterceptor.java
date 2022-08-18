package com.ssafy.aejimeongji.domain.interceptor;

import com.ssafy.aejimeongji.domain.entity.Role;
import com.ssafy.aejimeongji.domain.exception.auth.ForbiddenException;
import com.ssafy.aejimeongji.security.TokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class AuthorizationInterceptor implements HandlerInterceptor {

    private final TokenProvider tokenProvider;

    public AuthorizationInterceptor(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String accessToken = tokenProvider.resolveToken(request).substring(7);;
        if (tokenProvider.getClaims(accessToken).get("role").toString().equals(Role.ROLE_ADMIN))
            return true;
        throw new ForbiddenException();
    }
}
