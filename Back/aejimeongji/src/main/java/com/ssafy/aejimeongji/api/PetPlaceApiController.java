package com.ssafy.aejimeongji.api;

import com.ssafy.aejimeongji.api.dto.petPlace.PetPlaceResponse;
import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.service.PetPlaceService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.locationtech.jts.geom.Point;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping("/api/petplace")
@RequiredArgsConstructor
public class PetPlaceApiController {

    private final PetPlaceService petPlaceService;

    @GetMapping
    public ResponseEntity<List<PetPlaceResponse>> getNearPetPlaceList(@RequestParam(value = "lat", defaultValue = "") String lat,
                                                              @RequestParam(value = "lng", defaultValue = "") String lng,
                                                              @RequestParam(value = "dist") String dist) {

        if (lat.isEmpty() || lng.isEmpty()) {
            List<PetPlace> list = petPlaceService.findPetPlaceList();
            List<PetPlaceResponse> reuslt = list.stream()
                    .map(o -> new PetPlaceResponse(o))
                    .collect(Collectors.toList());

            return ResponseEntity.ok().body(reuslt);

        } else {
            List<PetPlace> list = petPlaceService.getNearPetPlaceList(Double.parseDouble(lat), Double.parseDouble(lng), Double.parseDouble(dist));
            List<PetPlaceResponse> result = list.stream()
                    .map(o -> new PetPlaceResponse(o, Double.parseDouble(lat), Double.parseDouble(lng), o.getPoint().getX(), o.getPoint().getY()))
                    .sorted(Comparator.comparing(PetPlaceResponse::getDistance))
                    .limit(5)
                    .collect(Collectors.toList());

            return ResponseEntity.ok().body(result);
        }
    }

    @GetMapping("/{petplaceId}")
    public ResponseEntity<PetPlaceResponse> getPetPlace(@PathVariable Long petplaceId) {
        PetPlace petPlace = petPlaceService.findPetPlace(petplaceId);
        PetPlaceResponse result = new PetPlaceResponse(petPlace);
        return ResponseEntity.ok().body(result);
    }
}
