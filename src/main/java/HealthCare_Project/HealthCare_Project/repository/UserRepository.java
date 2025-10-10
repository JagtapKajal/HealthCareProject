package HealthCare_Project.HealthCare_Project.repository;

import HealthCare_Project.HealthCare_Project.entity.UserDetails;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserDetails, Integer> {


    public UserDetails findByEmailAndPassword(String email, String password);
}
