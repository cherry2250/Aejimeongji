package com.ssafy.aejimeongji.domain.repository;

import com.ssafy.aejimeongji.domain.entity.Like;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface LikeRepository extends JpaRepository<Like, Long> {

    @Query("select l from Like l join fetch l.member m join fetch l.guideBook g where m.id = :memberId")
    List<Like> findLikesByMemberId(@Param("memberId") Long memberId);

    Optional<Like> findByMemberIdAndGuideBookId(Long memberId, Long guideId);

}
