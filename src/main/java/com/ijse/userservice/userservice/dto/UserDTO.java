package com.ijse.userservice.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Data
public class UserDTO {
    private long id;
    private String user_name;
    private String age;
    private String gender;
    private String email;
    private String user_contact;
    private byte[]user_img;
}
