package com.todo.list.back.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class UploadFileService {


    public String saveImages(MultipartFile file, String name) throws IOException {
        if(!file.isEmpty()) {
            byte[] bytes = file.getBytes();
            //variable de tipo path que redirige al directorio del proyecto
            String folder = "avatars//";
            Path path = Paths.get(folder + name + "_" + file.getOriginalFilename());
            Files.write(path, bytes);
            return name + file.getOriginalFilename();
        }
        return "default.jpg";
    }

    public void deleteImages(String name) {
        String rute = "avatars//";
        //el import de java.io
        File file = new File(rute + name);
        file.delete();
    }
}
