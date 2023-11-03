package com.ijse.userservice.userservice.repo;

import com.ijse.userservice.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;

public interface UserRepo extends JpaRepository<User, Long> {
    void deleteById(long id);

    @Query(value = "SELECT v FROM User v WHERE v.user_name = :user_name")
    ArrayList<User> findAllBy(String user_name);
}
