// src/components/PageCountSelector.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './PageCountSelector.css';

const pageCounts = ['100-150', '200-300', '400-500', '500+'];

function PageCountSelector({ setPageCount }) {
    const navigate = useNavigate(); // useNavigate replaces useHistory

    const handlePageCountSelect = (pageCount) => {
        setPageCount(pageCount);
        navigate('/suggestions'); // Navigate to book suggestions after page count is selected
    };

    return (
        <div className="page-count-selector">
            <h2>Select Book Length</h2>
            <div className="page-count-grid">
                {pageCounts.map((count) => (
                    <button
                        key={count}
                        onClick={() => handlePageCountSelect(count)}
                        className="page-count-button"
                    >
                        {count} pages
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PageCountSelector;
