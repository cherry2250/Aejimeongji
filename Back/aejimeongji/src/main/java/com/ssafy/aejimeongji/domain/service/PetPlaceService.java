package com.ssafy.aejimeongji.domain.service;

import com.ssafy.aejimeongji.domain.entity.PetPlace;
import com.ssafy.aejimeongji.domain.repository.PetPlaceRepostiory;
import com.ssafy.aejimeongji.domain.util.Direction;
import com.ssafy.aejimeongji.domain.util.GeometryUtil;
import com.ssafy.aejimeongji.domain.util.Location;
import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

import static java.lang.Math.*;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PetPlaceService {

    private final PetPlaceRepostiory petPlaceRepostiory;

    private final EntityManager em;

    /***
     *
     * @param latitude 위도
     * @param longitude 경도
     * @param distance 거리, 1 = 1Km
     */

    public List<PetPlace> getNearPetPlaceList(Double latitude, Double longitude, Double distance) {
        Location northEast = GeometryUtil
                .calculate(latitude, longitude, distance, Direction.NORTHEAST.getBearing());
        Location southWest = GeometryUtil
                .calculate(latitude, longitude, distance, Direction.SOUTHWEST.getBearing());

        double x1 = northEast.getLatitude();
        double y1 = northEast.getLongitude();
        double x2 = southWest.getLatitude();
        double y2 = southWest.getLongitude();

        String pointFormat = String.format("'LINESTRING(%f %f, %f %f)')", x1, y1, x2, y2);
        Query query = em.createNativeQuery("SELECT p.id, p.name, p.description, "
                        + "p.address, p.tel, p.category, p.point, p.opening_hours, p.distance "
                        + "FROM petplace AS p "
                        + "WHERE MBRContains(ST_LINESTRINGFROMTEXT(" + pointFormat + ", p.point)", PetPlace.class);

        List<PetPlace> list = query.getResultList();

        return list;
    }

    public List<PetPlace> findPetPlaceList() {
        return petPlaceRepostiory.findAll();
    }

    public PetPlace findPetPlace(Long petplaceId) {
        return petPlaceRepostiory.findById(petplaceId)
                .orElseThrow(() -> new IllegalArgumentException("해당 " + petplaceId + " 는 존재하지 않습니다."));
    }
}