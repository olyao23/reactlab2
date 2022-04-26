package com.example.lab2.model;

import com.example.lab2.model.enumerations.Category;
import lombok.Data;

import javax.persistence.*;

//@entity, id, generated value
@Data
@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated
    private Category category;

    @ManyToOne
    private Author author;

    private Integer availableCopies;

    public Book() {
    }

    public Book(String name, Category category, Author author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.availableCopies = availableCopies;
    }

    //da prasham dali e bolje da koristam int, ili da ja koristam klasata Integer


}
