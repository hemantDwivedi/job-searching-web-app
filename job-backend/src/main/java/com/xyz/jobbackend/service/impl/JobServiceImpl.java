package com.xyz.jobbackend.service.impl;

import com.xyz.jobbackend.dto.JobDto;
import com.xyz.jobbackend.model.Job;
import com.xyz.jobbackend.repository.JobRepository;
import com.xyz.jobbackend.service.JobService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {
    private JobRepository jobRepository;
    private ModelMapper modelMapper;
    @Override
    public List<JobDto> retrieveAllJobs() {
        return jobRepository
                .findAll()
                .stream()
                .map(job -> modelMapper.map(job, JobDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public JobDto createJob(JobDto jobDto) {
        Job job = modelMapper.map(jobDto, Job.class);
        return modelMapper.map(jobRepository.save(job), JobDto.class);
    }
}
