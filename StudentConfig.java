package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class StudentConfig
{
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository)
    {
        return args ->
        {
            Student robert=new Student("Robert",
                    LocalDate.of(2001,02,27),
                    "robert05@gmail.com");

            Student alex=new Student( "Alex",
                    LocalDate.of(2002,02,27),
                    "alexa05@gmail.com");

            Student james=new Student( "James",
                    LocalDate.of(2000,03,20),
                    "james9005@gmail.com");

            repository.saveAll(List.of(robert,alex,james));

        };
    }
}
