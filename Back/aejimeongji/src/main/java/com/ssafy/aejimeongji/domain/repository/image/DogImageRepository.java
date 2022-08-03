package com.ssafy.aejimeongji.domain.repository.image;

import com.ssafy.aejimeongji.domain.entity.PetplaceImage;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DogImageRepository extends JpaRepository<PetplaceImage, Long> {
}
