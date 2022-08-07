package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.entity.OAuthAttributes;
import com.ssafy.aejimeongji.domain.entity.Role;
import com.ssafy.aejimeongji.domain.entity.UserProfile;
import com.ssafy.aejimeongji.domain.repository.MemberRepository;
import edu.emory.mathcs.backport.java.util.Collections;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@Service
public class OAuthService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        log.debug("loadUser 호출");
        DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);
        UserProfile userProfile = OAuthAttributes.extract(getRegistrationId(userRequest), oAuth2User.getAttributes());
        Map<String, Object> attributes = getAttribute(userProfile);

        return new DefaultOAuth2User(
                Collections.singleton(Role.ROLE_USER),
                attributes,
                userProfile.getOauthId()
        );
    }

    private Map<String, Object> getAttribute(UserProfile userProfile) {
        Map<String, Object> attributes = new HashMap<>();
        attributes.put("email", userProfile.getEmail());
        attributes.put("oauthId", userProfile.getOauthId());
        return attributes;
    }

    private String getRegistrationId(OAuth2UserRequest userRequest) {
        return userRequest.getClientRegistration().getRegistrationId();
    }
}
