package HealthCare_Project.HealthCare_Project.serviceImpl;

import HealthCare_Project.HealthCare_Project.entity.UserDetails;
import HealthCare_Project.HealthCare_Project.repository.UserRepository;
import HealthCare_Project.HealthCare_Project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails addUser(UserDetails user) {
        UserDetails user1 =  userRepository.save(user);
        return user1;
    }

    @Override
    public String findByUserEmailAndPassword(String email1, String password1) {
        if (email1 != null) {
            return "login faild";
        }

            UserDetails userDetails1 = userRepository.findByEmailAndPassword(email1, password1);
            return "userDetails1";
    }

}
