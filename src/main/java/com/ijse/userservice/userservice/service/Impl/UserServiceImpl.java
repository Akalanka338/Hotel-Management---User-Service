package com.ijse.userservice.userservice.service.Impl;

import com.ijse.userservice.userservice.dto.UserDTO;
import com.ijse.userservice.userservice.entity.User;
import com.ijse.userservice.userservice.repo.UserRepo;
import com.ijse.userservice.userservice.service.UserService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;




    @Override
    public void addUser(UserDTO userDTO) {
        if (userRepo.existsById(userDTO.getId())){
            throw new RuntimeException(userDTO.getId()+"Already Exists");
        }

        User user=modelMapper.map(userDTO,User.class);
//        vehicle.setVehicle_brand(vehicleDTO.getVehicle_brand());
//        vehicle.setVehicle_img(vehicleDTO.getVehicle_img());
//        vehicle.setVehicle_category(vehicleDTO.getVehicle_category());
//        vehicle.setFuel_type(vehicleDTO.getFuel_type());
//        vehicle.getDriver_contact(vehicleDTO.getDriver_contact());

        userRepo.save(user);
    }

    @Override
    public void deleteUser(long id) {
        if (!userRepo.existsById(id)){
            throw new RuntimeException("User"+id+"Not Available Deleted");
        }
        userRepo.deleteById(id);
    }

    @Override
    public void updateUser(User userDTO) {
        Optional<User> Byid=userRepo.findById(userDTO.getId());
        if (Byid.isEmpty()){
            throw new RuntimeException("Id does not Exists");
        }
        userRepo.save(modelMapper.map(userRepo,User.class));
    }

    @Override
    public ArrayList<UserDTO> getAllUsers() {
      return modelMapper.map(userRepo.findAll(), new TypeToken<ArrayList<UserDTO>>() {}.getType());
    }

    @Override
    public List<UserDTO> searchUserByName(String user_name) {
        return modelMapper.map(userRepo.findAllBy(user_name), new TypeToken<ArrayList<UserDTO>>() {}.getType());
    }

    @Override
    public User findById(long id) {
        if (!userRepo.existsById(id)){
            throw new RuntimeException("User"+id+"Not Available");
        }
        Optional<User>byId=userRepo.findById(id);
        return byId.get();
    }
}
