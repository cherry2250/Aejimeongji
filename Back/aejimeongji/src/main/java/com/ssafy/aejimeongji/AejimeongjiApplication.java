package com.ssafy.aejimeongji;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class AejimeongjiApplication {

	public static void main(String[] args) {
		SpringApplication.run(AejimeongjiApplication.class, args);
	}

}
