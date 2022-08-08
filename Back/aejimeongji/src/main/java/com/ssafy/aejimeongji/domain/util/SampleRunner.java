//package com.ssafy.aejimeongji.domain.util;
//
//import com.ssafy.aejimeongji.domain.entity.PetPlace;
//import com.ssafy.aejimeongji.domain.service.PetPlaceService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.util.List;
//
//@Component
//public class SampleRunner implements ApplicationRunner {
//
//    @Autowired
//    PetPlaceService petPlaceService;
//
//    @Transactional(readOnly = true)
//    @Override
//    public void run(ApplicationArguments args) {
//        final List<PetPlace> lists = petPlaceService
//                .getNearPetPlaceList(37.0, 127.0, 100.0);
//
//        System.out.println(lists.toArray().length);
//
//        for (PetPlace list : lists) {
//            System.out.println(
//                    list.getDescription() + " / " + list.getName() +  " / " + list.getPoint()
//            );
//        }
//    }
//}
