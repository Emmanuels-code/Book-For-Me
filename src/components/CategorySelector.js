// src/components/CategorySelector.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategorySelector.css';

const categories = ['Fantasy', 'Science Fiction', 'Romance', 'Non-fiction'];

function CategorySelector({ setCategory }) {
    const navigate = useNavigate();

    // useCallback to memoize the function and avoid unnecessary re-renders
    const handleCategorySelect = useCallback((category) => {
        setCategory(category);
        navigate('/page-count');
    }, [setCategory, navigate]);

    return (
        <div className="category-selector">
            <h2>Select a Book Category</h2>
            <div className="category-grid">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className="category-button"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategorySelector;
