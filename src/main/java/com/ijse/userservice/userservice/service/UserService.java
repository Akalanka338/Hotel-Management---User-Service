package com.ijse.userservice.userservice.service;


import com.ijse.userservice.userservice.dto.UserDTO;
import com.ijse.userservice.userservice.entity.User;

import java.util.ArrayList;
import java.util.List;

public interface UserService {
    void  addUser(UserDTO userDTO);

    void  deleteUser(long id);

    void updateUser(User userDTO);

    ArrayList<UserDTO> getAllUsers();

    List<UserDTO> searchUserByName(String user_name);

    User findById(long id);
}
