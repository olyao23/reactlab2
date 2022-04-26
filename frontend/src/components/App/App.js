import './App.css';
import React, {Component} from "react";
import Books from '../Books/books';
import Categories from '../Categories/categories';
import Header from '../Header/header';
import AddBook from '../Books/AddBook/AddBook';
import EditBook from '../Books/EditBook/editBook';
import lab2Service from "../../repository/lab2Repository";
import {Router, Route} from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: []
        }
    }

    loadBooks = () => {
        lab2Service.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        lab2Service.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            })
    }

    deleteBook = (id) => {
        lab2Service.deleteBook(id)
            .then(() => {
                this.loadBooks();
            })

    }

    addBook = (name, category, author, availableCopies) => {
        lab2Service.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();

            })
    }

    getBook = (id) => {
        lab2Service.getBook(id)
            .then(() => {
                this.setState({
                    // selectedBook: data.data
                })
            })
    }

    editBook = (name, category, author, availableCopies) => {
        lab2Service.editBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
    }

    render() {
        return (
            <div>
                <Header header={this.state.header}/>
                <Books books={this.state.books} onDelete={this.deleteBook()}/>
                <Categories categories={this.state.categories}/>

            </div>

            // <Router>
            //     <div>
            //         <Route path={"/books"} exact render={() => <Books books={this.state.books}/>}></Route>
            //         <Route path={"/categories"} exact render={() => <Categories categories={this.state.categories}/>}></Route>
            //             <Route path={"/books/add"} exact render={() => <AddBook categories={this.state.categories} onAddBook={this.addBook}/>}></Route>
            //             <Route path={"/books/edit/:id"} exact render={() => <EditBook categories={this.state.categories} onEditBook={this.editBook}/>}></Route>
            //     </div>
            // </Router>
        )
    }


}

export default App;
