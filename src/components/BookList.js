// src/components/BookList.js
import React from 'react';
import { useFetchBooks } from '../hooks/useFetchBooks';
import './BookList.css';

function BookList({ category, pageCount }) {
    const { books, loading, error } = useFetchBooks(category, pageCount);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="book-list">
            <h2>Recommended Books</h2>
            {!Array.isArray(books) || books.length === 0 ? (
                <p>No books found matching your criteria. Try different filters.</p>
            ) : (
                <ul>
                    {books.map((book) => (
                        <li key={book._id || Math.random()} className="book-item">
                            <img
                                src={book.img_url || 'https://via.placeholder.com/128x192'}
                                alt={book.title || 'Book cover'}
                                className="book-cover"
                            />
                            <div className="book-info">
                                <h3>{book.title || 'Untitled'}</h3>
                                <p>by {book.author || 'Unknown Author'}</p>
                                <p>{book.summary || 'No summary available.'}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BookList;
