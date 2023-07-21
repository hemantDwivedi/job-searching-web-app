package com.xyz.jobbackend.service;

import com.xyz.jobbackend.dto.JobDto;

import java.util.List;

public interface JobService {
    List<JobDto> retrieveAllJobs();

    JobDto createJob(JobDto jobDto);
}
