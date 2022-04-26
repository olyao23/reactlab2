import React from 'react';

const categories = (props) => {
    return (
        <div className="categoriesSite">
            <h1>Categories site</h1>
            <table className="tableCategories">
                <thead>
                    <tr>
                        <th>Novel</th>
                        <th>Thriller</th>
                        <th>History</th>
                        <th>Fantasy</th>
                        <th>Biography</th>
                        <th>Classics</th>
                        <th>Drama</th>
                    </tr>
                </thead>
                <tbody>
                    {props.categories.map((term) => {
                        return (
                            <tr>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default categories;