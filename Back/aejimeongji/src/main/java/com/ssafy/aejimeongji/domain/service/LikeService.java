package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.GuideBook;
import com.ssafy.aejimeongji.domain.entity.Like;
import com.ssafy.aejimeongji.domain.entity.Member;
import com.ssafy.aejimeongji.domain.repository.LikeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class LikeService {

    private final LikeRepository likeRepository;

    // 좋아요
    public void likeGuideBook(Member member, GuideBook guideBook) throws IllegalArgumentException {

        Optional<Like> optionalLike = likeRepository.findByMemberIdAndGuideBookId(member.getId(), guideBook.getId());

        if (optionalLike.isPresent()) {
            throw new IllegalArgumentException("이미 좋아요한 가이드입니다.");
        }

        likeRepository.save(new Like(member, guideBook));
    }

    // 좋아요 취소
    public void unlikeGuideBook(Member member, GuideBook guideBook) throws IllegalArgumentException {

        Optional<Like> like = likeRepository.findByMemberIdAndGuideBookId(member.getId(), guideBook.getId());

        if (like.isEmpty()) {
            throw new IllegalArgumentException("아직 좋아요하지 않은 가이드입니다.");
        }
        likeRepository.delete(like.get());
    }
}
