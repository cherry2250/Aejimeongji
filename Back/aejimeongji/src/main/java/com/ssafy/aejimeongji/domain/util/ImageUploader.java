package com.ssafy.aejimeongji.domain.util;

import com.ssafy.aejimeongji.domain.entity.Image;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class ImageUploader {

    @Value("${file.dir}")
    private String fileDir;

    public String getFullPath(String imageName) {
        return fileDir + imageName;
    }

    public List<Image> storeImages(List<MultipartFile> multipartFileList) throws IOException {
        List<Image> storeImages = new ArrayList<>();
        for (MultipartFile file : multipartFileList) {
            if(!file.isEmpty()) {
                storeImages.add(storeImage(file));
            }
        }
        return storeImages;
    }

    public Image storeImage(MultipartFile multipartFile) throws IOException {
        if (multipartFile.isEmpty())
            return null;

        String originalFilename = multipartFile.getOriginalFilename();
        String storeFilename = createStoreFilename(originalFilename);
        multipartFile.transferTo(new File(storeFilename));

        return new Image(originalFilename, storeFilename);
    }

    private String createStoreFilename(String originalFilename) {
        return UUID.randomUUID().toString() + "." + extractExt(originalFilename);
    }

    private String extractExt(String originalFilename) {
        return originalFilename.substring(originalFilename.lastIndexOf(".") + 1);
    }

}
