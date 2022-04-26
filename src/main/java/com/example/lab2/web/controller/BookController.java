package com.example.lab2.web.controller;

import com.example.lab2.model.Author;
import com.example.lab2.model.enumerations.Category;
import com.example.lab2.service.BookService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "https://localhost:3000")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public String getBooksPage() {
        return "books";
    }

    @PostMapping
    public String addBook(@RequestParam String name,
                          @RequestParam Category category,
                          @RequestParam Author author,
                          @RequestParam Integer availableCopies) {

        bookService.addBook(name, category, author, availableCopies);
        return "redirect:/books";
    }

    @DeleteMapping("/books/{id}")
    public String deleteById(Long id) {
        bookService.deleteBook(id);
        return "books";
    }

}
