package com.ssafy.aejimeongji.domain.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

<<<<<<< HEAD
@EntityListeners(AuditingEntityListener.class)
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "like")
=======
@Entity
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Table(name = "likes")
>>>>>>> develop
public class Like {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "guidebook_id")
    private GuideBook guideBook;

    @CreatedDate
<<<<<<< HEAD
    private LocalDateTime liketime;

    public Like(Member member, GuideBook guideBook, LocalDateTime liketime) {
        this.member = member;
        this.guideBook = guideBook;
        this.liketime = liketime;
=======
    @Column(updatable = false)
    private LocalDateTime liketime;

    public Like(Member member, GuideBook guideBook) {
        this.member = member;
        this.guideBook = guideBook;
>>>>>>> develop
    }
}
