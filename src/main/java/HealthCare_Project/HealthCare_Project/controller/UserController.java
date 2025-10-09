package HealthCare_Project.HealthCare_Project.controller;

import HealthCare_Project.HealthCare_Project.entity.UserDetails;
import HealthCare_Project.HealthCare_Project.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<UserDetails> addUser(@RequestBody UserDetails user){
        UserDetails adduser = userService.addUser(user);
        return new ResponseEntity<>(adduser, HttpStatus.OK);
    }

    @PostMapping("/findUser")
    public ResponseEntity<String> findUserByEmailAndPassword(@RequestBody String email4, String password1){
        String userDetails = userService.findByUserEmailAndPassword(email4, password1);
        return new ResponseEntity<>("login successful", HttpStatus.OK);
    }
}
