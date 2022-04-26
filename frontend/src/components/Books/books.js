import React from "react";
// import ReactPaginate from 'react-paginate';

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage();

        return (
            <div className="booksSite">
                <h1>Books site</h1>
                <table className="tableBooks">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Author</th>
                        <th>Available copies</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books}
                    </tbody>
                </table>

            </div>
        );
    }

    handleChange = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        {
            this.props.books.map((term) => {
                return (
                    <tr>
                        <td>{term.name}</td>
                        <td>{term.category}</td>
                        <td>{term.author}</td>
                        <td>{term.availableCopies}</td>
                        <td className="deleteBookButton" onClick={() => this.props.onDelete(this.props.term.id)}>Delete
                            book
                        </td>
                    </tr>
                )
            }).filter((book, index) => {
                return index >= offset && index < nextPageOffset;
            })
        }
    }

}

export default Books;