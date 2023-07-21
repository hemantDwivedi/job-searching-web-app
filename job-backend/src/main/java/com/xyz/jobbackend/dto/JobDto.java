package com.xyz.jobbackend.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class JobDto {
    private String name;
    private String description;
    private String salary;
    private String location;
}
