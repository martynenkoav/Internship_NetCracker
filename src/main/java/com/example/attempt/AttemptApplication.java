package com.example.attempt;

import org.flywaydb.core.Flyway;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AttemptApplication {

    public static void main(String[] args) {
        Flyway flyway = Flyway.configure().dataSource("jdbc:postgresql://localhost:5432/Attempt_db", "postgres", "Hib67qwe00LA").load();
        flyway.migrate();
        SpringApplication.run(AttemptApplication.class);
    }
}
