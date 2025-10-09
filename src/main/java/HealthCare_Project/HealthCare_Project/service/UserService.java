package HealthCare_Project.HealthCare_Project.service;

import HealthCare_Project.HealthCare_Project.entity.UserDetails;

public interface UserService {

    public UserDetails addUser(UserDetails user);

    public String  findByUserEmailAndPassword(String email1, String password1);
}
