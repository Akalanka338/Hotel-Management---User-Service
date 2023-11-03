package com.ijse.userservice.userservice.api;

import com.ijse.userservice.userservice.dto.UserDTO;
import com.ijse.userservice.userservice.entity.User;
import com.ijse.userservice.userservice.service.UserService;
import com.ijse.userservice.userservice.util.ResponseUtil;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("api/user")
@CrossOrigin
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    ModelMapper mapper;

    @PostMapping
    public ResponseUtil saveUser(@RequestParam("id") Long id,
                                    @RequestParam("user_name") String user_name,
                                    @RequestParam("age") String age,
                                    @RequestParam("gender") String gender,
                                    @RequestParam("email") String email,
                                    @RequestParam("user_contact") String user_contact,
                                    @RequestParam("user_img") MultipartFile user_img) throws IOException {
        UserDTO user = new UserDTO(id,user_name,age,gender,email,user_contact,user_img.getBytes());
        System.out.println(user.getUser_name());
        System.out.println(user.getUser_img());
        userService.addUser(user);
        return new ResponseUtil("200", "User Added Successfully", null);
    }


    @PutMapping
    public ResponseUtil updateUser(@RequestParam("id") Long id,
                                   @RequestParam("user_name") String user_name,
                                   @RequestParam("age") String age,
                                   @RequestParam("gender") String gender,
                                   @RequestParam("email") String email,
                                   @RequestParam("user_contact") String user_contact,
                                   @RequestParam("user_img") MultipartFile user_img) throws IOException {


        User existsUser = userService.findById(id);

        if (existsUser != null) {
            existsUser.setUser_name(user_name);
            existsUser.setAge(age);
            existsUser.setGender(gender);
            existsUser.setEmail(email);
            existsUser.setUser_contact(user_contact);
            existsUser.setUser_img(user_img.getBytes());


            userService.updateUser(existsUser);
            return new ResponseUtil("200", "Updated User Successfully!", null);
        } else {
            return new ResponseUtil("404", "User not found", null);
        }
    }
    @DeleteMapping(params = "id")
    public ResponseUtil deleteUser(@RequestParam Long id){

        userService.deleteUser(id);
        return new ResponseUtil("200" ,id+"Deleted SuccessFully",null);

    }
    @GetMapping
    public ResponseUtil getAllUser(){
        ArrayList<UserDTO> userDTOS=userService.getAllUsers();

        return new ResponseUtil("200", "Show All User", userDTOS);
    }

    @GetMapping(value = "api/search",params ="user_name",produces = MediaType.APPLICATION_JSON_VALUE)

    public ResponseUtil searchByUsereName(@RequestParam String user_name){
        List<UserDTO> userDTOArrayList=userService.searchUserByName(user_name);
        return new ResponseUtil("200", user_name+"Searching", userDTOArrayList);

    }
}
