// src/components/CategorySelector.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CategorySelector.css';

const categories = ['Fantasy', 'Science Fiction', 'Romance', 'Non-fiction'];

function CategorySelector({ setCategory }) {
    const navigate = useNavigate(); // useNavigate replaces useHistory

    const handleCategorySelect = (category) => {
        setCategory(category);
        navigate('/page-count'); // Navigate to page-count selection
    };

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
