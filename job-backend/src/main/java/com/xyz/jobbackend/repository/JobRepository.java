package com.xyz.jobbackend.repository;

import com.xyz.jobbackend.dto.JobDto;
import com.xyz.jobbackend.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface JobRepository extends JpaRepository<Job, Integer> {
    Optional<JobDto> findByName(String name);
    Optional<JobDto> findByLocation(String location);
}
