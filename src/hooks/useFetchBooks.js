// src/hooks/useFetchBooks.js
import { useReducer, useEffect } from 'react';

const initialState = {
    books: [],
    loading: false,
    error: null
};

// Reducer function for managing state
function booksReducer(state, action) {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, books: action.payload };
        case 'FETCH_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export const useFetchBooks = (category, pageCount) => {
    const [state, dispatch] = useReducer(booksReducer, initialState); // useReducer replaces useState

    useEffect(() => {
        if (!category || !pageCount) return;

        const fetchBooks = async () => {
            const rapidApiKey = process.env.REACT_APP_RAPIDAPI_KEY;
            const rapidApiHost = process.env.REACT_APP_RAPIDAPI_HOST;

            dispatch({ type: 'FETCH_INIT' });

            try {
                const response = await fetch(
                    `https://${rapidApiHost}/api/books/book-recommendations?genre=${category}`,
                    {
                        method: 'GET',
                        headers: {
                            'x-rapidapi-key': rapidApiKey,
                            'x-rapidapi-host': rapidApiHost,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }

                const data = await response.json();
                if (data && data.recommendations) {
                    dispatch({ type: 'FETCH_SUCCESS', payload: data.recommendations.slice(0, 10) });
                } else {
                    dispatch({ type: 'FETCH_FAILURE', payload: 'No books found for the specified genre' });
                }
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE', payload: error.message || 'Unknown error' });
            }
        };

        fetchBooks();
    }, [category, pageCount]);

    return state; // Return state from useReducer
};
