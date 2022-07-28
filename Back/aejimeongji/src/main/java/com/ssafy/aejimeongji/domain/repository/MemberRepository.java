package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.repository.customrepository.MemberCustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>, MemberCustomRepository {

    boolean existsByEmail(String email);
    boolean existsByNickname(String nickname);
}
