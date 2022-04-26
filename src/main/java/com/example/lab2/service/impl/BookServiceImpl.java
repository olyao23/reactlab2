package com.example.lab2.service.impl;

import com.example.lab2.model.Author;
import com.example.lab2.model.Book;
import com.example.lab2.model.enumerations.Category;
import com.example.lab2.repository.BookRepository;
import com.example.lab2.service.BookService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Book addBook(String name, Category category, Author author, Integer availableCopies) {
        Book book = new Book(name, category, author, availableCopies);
        return bookRepository.save(book);
    }


    @Override
    public void deleteBook(Long id) {
        bookRepository.deleteById(id);
    }
}
