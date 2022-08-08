package com.ssafy.aejimeongji.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    private Map<String, Object> result = new HashMap<>();
    private final TokenProvider tokenProvider;

    public LoginInterceptor(TokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
        result.put("code", 401);
        result.put("message", "토큰이 유효하지 않습니다.");
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String accessToken = tokenProvider.resolveToken(request);

        log.debug("엑세스 토큰 = {}", accessToken);

        // Bearer 체크
        if (accessToken == null && !accessToken.startsWith("Bearer ")) {
            log.debug("엑세스 토큰이 널이거나 Bearer가 없음");
            result.put("message", "Bearer 확인해주세요!");
            makeResponse(response);
            return false;
        }

        // Bearer 삭제
        accessToken = accessToken.substring(7);

        // 토큰 검증
        if (StringUtils.hasText(accessToken) && tokenProvider.validateToken(accessToken)) {
            log.debug("유효한 토큰");
            return true;
        } else {
            log.debug("유효하지 않은 토큰");
            makeResponse(response);
            return false;
        }
    }

    private void makeResponse(HttpServletResponse response) throws IOException {
        log.debug("유효하지 않은 토큰");
        response.setStatus(401);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        response.getWriter().write(new ObjectMapper().writeValueAsString(result));
    }
}
