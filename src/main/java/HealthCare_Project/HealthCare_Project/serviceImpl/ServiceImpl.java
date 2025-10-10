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
    public boolean findByUserEmailAndPassword(String email, String password) {
        UserDetails user = userRepository.findByEmailAndPassword(email, password);
        return user != null;
    }



}
