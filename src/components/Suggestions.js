import React from 'react';
import BookList from './BookList';
import './Suggestions.css';

function Suggestions({ category, pageCount }) {
    return (
        <div className="suggestions-page">
            <h2 className="suggestions-title">Your Suggestions</h2>
            <BookList category={category} pageCount={pageCount} />
        </div>
    );
}

export default Suggestions;