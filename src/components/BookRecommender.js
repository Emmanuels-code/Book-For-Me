// src/components/BookRecommender.js
import React, { useState } from 'react';
import { useFetchBooks } from '../hooks/useFetchBooks';

function BookRecommender() {
    const [category, setCategory] = useState('');
    const [pageCount, setPageCount] = useState('200-300'); // Default page count
    const { books, loading, error } = useFetchBooks(category, pageCount);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Category and pageCount are automatically passed to useFetchBooks
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter book category"
                />
                <button type="submit">Get Recommendation</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {books.length > 0 && (
                <div>
                    <h2>Recommended Books:</h2>
                    <ul>
                        {books.map((book) => (
                            <li key={book.id}>
                                {book.title} by {book.author || 'Unknown Author'}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default BookRecommender;
