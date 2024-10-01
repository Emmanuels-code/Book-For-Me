// src/hooks/useFetchBooks.js
import { useState, useEffect } from 'react';

export const useFetchBooks = (category, pageCount) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!category || !pageCount) return; // Avoid fetch if category/pageCount are missing

        const fetchBooks = async () => {
            const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;
            const rapidApiHost = process.env.REACT_APP_RAPIDAPI_HOST;

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://${rapidApiHost}/api/books/book-recommendations?genre=${category}`, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': rapidApiKey,
                        'x-rapidapi-host': rapidApiHost,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }

                const data = await response.json();
                if (data && data.recommendations) {
                    setBooks(data.recommendations.slice(0, 10));
                } else {
                    setError('No books found for the specified genre');
                }
            } catch (err) {
                setError(err.message || 'Unknown error occurred while fetching books');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [category, pageCount]);

    return { books, loading, error };
};
