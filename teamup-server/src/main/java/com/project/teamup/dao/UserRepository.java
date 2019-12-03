package com.project.teamup.dao;


import com.project.teamup.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<List<User>> findUsersBySupervisorId(Long id);
}
