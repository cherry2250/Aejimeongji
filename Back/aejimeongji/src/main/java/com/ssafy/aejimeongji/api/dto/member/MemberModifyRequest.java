package com.ssafy.aejimeongji.api.dto.member;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberModifyRequest {
    private String nickname;
    private String password;
    private String phoneNumber;

}
