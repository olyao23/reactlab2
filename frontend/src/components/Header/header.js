import React from 'react';
import {Link} from "react-router-dom";

const header = (props) => {
    return (
        <header className="headerSite">
            <ul className="headerList">
                <li id="logo">Lab 2</li>

                <li>
                    <a href="/books">Books</a>
                    {/*<Link to={"/books"}>Books</Link>*/}
                </li>

                <li>
                    <a href="/books">Categories</a>
                    {/*<Link to={"/categories"}>Categories</Link>*/}
                </li>
            </ul>
        </header>
    );
}

export default header;