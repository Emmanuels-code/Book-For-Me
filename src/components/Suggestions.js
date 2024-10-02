import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import BookList from './BookList';
import './Suggestions.css';

function Suggestions({ category, pageCount }) {
    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        // Check if category or pageCount is not set
        if (!category || !pageCount) {
            navigate('/'); // Redirect to home if conditions are not met
        }
    }, [category, pageCount, navigate]); // Dependencies array

    return (
        <div className="suggestions-page">
            <h2 className="suggestions-title">Your Suggestions</h2>
            <BookList category={category} pageCount={pageCount} />
        </div>
    );
}

export default Suggestions;
