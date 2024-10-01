import React, { useMemo } from 'react';
import { useFetchBooks } from '../hooks/useFetchBooks';
import './BookList.css';

function BookList({ category, pageCount }) {
    const { books, loading, error } = useFetchBooks(category, pageCount);

    const filteredBooks = useMemo(() => {
        return books.filter(book => book && book.title);
    }, [books]);

    if (loading || (!Array.isArray(filteredBooks) || filteredBooks.length === 0)) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <p className="error">Error: {error}</p>;
    }

    return (
        <div className="book-grid">
            {filteredBooks.map((book) => (
                <div key={book._id || Math.random()} className="book-item">
                    <img
                        src={
                            book.img_url
                                ? `https://cors-anywhere.herokuapp.com/${book.img_url}` // Use proxy if CORS issues
                                : 'https://via.placeholder.com/128x192'
                        }
                        onError={(e) => {
                            // Fallback to placeholder if the image URL fails
                            e.target.src = 'https://via.placeholder.com/128x192';
                        }}
                        className="book-cover"
                        alt={book.title || 'Book cover'}
                    />
                    <div className="book-info">
                        <h3>{book.title || 'Untitled'}</h3>
                        <p>by {book.author || 'Unknown Author'}</p>
                        <p className="book-summary">{book.summary || 'No summary available.'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookList;
