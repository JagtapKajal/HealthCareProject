package HealthCare_Project.HealthCare_Project.controller;

import HealthCare_Project.HealthCare_Project.entity.UserDetails;
import HealthCare_Project.HealthCare_Project.service.UserService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService userService;
    @PostMapping("/addUser")
    public ResponseEntity<String> findUserByEmailAndPassword(@RequestBody UserDetails loginRequest) {
        boolean isValid = userService.findByUserEmailAndPassword(
                loginRequest.getEmail(),
                loginRequest.getPassword()
        );

        if (isValid) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }
    }


    @PostMapping("/findUser")
    public ResponseEntity<String> loginUser(@RequestBody UserDetails loginRequest) {
        boolean isValid = userService.findByUserEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword());
        if (isValid) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }


}
