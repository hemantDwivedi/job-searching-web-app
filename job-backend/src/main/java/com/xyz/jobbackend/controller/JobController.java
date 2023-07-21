package com.xyz.jobbackend.controller;

import com.xyz.jobbackend.dto.JobDto;
import com.xyz.jobbackend.service.JobService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/jobs")
@AllArgsConstructor
public class JobController {
    private JobService jobService;

    @GetMapping
    public ResponseEntity<List<JobDto>> retrieveAllJobs(){
        return ResponseEntity.ok(jobService.retrieveAllJobs());
    }
}
