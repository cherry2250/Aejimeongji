package com.ssafy.aejimeongji.api;


import com.ssafy.aejimeongji.api.dto.pushalert.FcmRequest;
import com.ssafy.aejimeongji.domain.service.FcmService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/push")
public class PushAlertController {

    private final FcmService fcmService;

    @PostMapping("/fcm")
    public ResponseEntity<?> pushMessage(@RequestBody FcmRequest request) throws IOException {
        System.out.println(request.getTargetToken() + " "
                +request.getTitle() + " " + request.getBody());

        fcmService.sendMessageTo(
                request.getTargetToken(),
                request.getTitle(),
                request.getBody());
        return ResponseEntity.ok().build();
    }
}
