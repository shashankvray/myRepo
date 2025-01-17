/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.icip.core.service;

import com.icip.core.repository.ClimateUserRepository;
import com.icip.core.user.ICIPUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author icipmac
 */
@Service("climateUserService")
@Transactional
public class ClimateUserServiceImpl implements ClimateUserService {

    @Autowired
    private ClimateUserRepository climateUserRepository; 
    
    @Override
    public ICIPUser createUser(ICIPUser user) {
        return this.climateUserRepository.createUser(user);
    }

    @Override
    public ICIPUser findUserByName(String userName) {
        return this.climateUserRepository.findUserByName(userName);
    }

    @Override
    public ICIPUser updateUserPassword(ICIPUser user) {
        return this.climateUserRepository.updateUserPassword(user);
    }

    @Override
    public ICIPUser findByEmail(String email) {
        return this.climateUserRepository.findByEmail(email);
    }
    
    @Override
    public void deleteUser(ICIPUser user){
        this.climateUserRepository.deleteUser(user);
    }
    
}
