package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.redis.PhoneAuth;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PhoneAuthRepository extends CrudRepository<PhoneAuth, String> {
}
