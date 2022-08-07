package com.ssafy.aejimeongji.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Optional;

@Transactional
@Component
@RequiredArgsConstructor
public class OAuthAuthenicationSuccesHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final MemberRepository memberRepository;
    private final TokenProvider tokenProvider;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        response.setCharacterEncoding("utf-8");
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        Member findMember = memberRepository.findByOauthId(authentication.getName()).orElse(null);

        if(findMember != null) {
            response.setStatus(HttpServletResponse.SC_OK);

            String accessToken = tokenProvider.createAccessToken(findMember);
            String refreshToken = tokenProvider.createRefreshToken(findMember);
            findMember.createRefreshToken(refreshToken);

            Map<String, Object> result = makeResultMap(accessToken, refreshToken);

            response.getWriter().write(new ObjectMapper().writeValueAsString(result));
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            Map<String, Object> attributes = ((DefaultOAuth2User) authentication.getPrincipal()).getAttributes();
            attributes.put("success", false);

            response.getWriter().write(new ObjectMapper().writeValueAsString(attributes));
        }
    }

    private Map<String, Object> makeResultMap(String accessToken, String refreshToken) {
        Map<String, Object> result = new LinkedHashMap<>();
        result.put("accessToken", accessToken);
        result.put("refreshToken", refreshToken);
        result.put("success", true);
        return result;
    }
}
