package com.xyz.jobbackend.controller;

import com.xyz.jobbackend.dto.JobDto;
import com.xyz.jobbackend.service.JobService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/jobs")
@AllArgsConstructor
public class JobController {
    private JobService jobService;

    @PostMapping
    public ResponseEntity<JobDto> createJob(@RequestBody JobDto jobDto){
        return new ResponseEntity<>(jobService.createJob(jobDto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<JobDto>> retrieveAllJobs(){
        return ResponseEntity.ok(jobService.retrieveAllJobs());
    }
}
