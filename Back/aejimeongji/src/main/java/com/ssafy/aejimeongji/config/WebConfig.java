package com.ssafy.aejimeongji.config;

import com.ssafy.aejimeongji.security.LoginInterceptor;
import com.ssafy.aejimeongji.security.TokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class WebConfig implements WebMvcConfigurer {

    private final TokenProvider tokenProvider;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor(tokenProvider))
                .order(1)
                .addPathPatterns("/api/**")
                .excludePathPatterns("/api/auth/**", "/api/phoneauth/**", "/api/signup", "/api/breed");
    }
}