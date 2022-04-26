import React from 'react';
// import {useHistory} from "react-router-dom";

const EditBook = (props) => {
    // const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        author: 0,
        availableCopies: 0
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const category = formData.category;
        const author = formData.author;
        const availableCopies = formData.availableCopies;

        props.onAddProduct(name, category, author, availableCopies);
        // history.push("/books");

    }
}

export default EditBook;