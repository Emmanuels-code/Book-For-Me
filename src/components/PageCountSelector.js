// src/components/PageCountSelector.js
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './PageCountSelector.css';

const pageCounts = ['100-150', '200-300', '400-500', '500+'];

function PageCountSelector({ setPageCount }) {
    const navigate = useNavigate();

    // useCallback to memoize the function
    const handlePageCountSelect = useCallback((pageCount) => {
        setPageCount(pageCount);
        navigate('/suggestions');
    }, [setPageCount, navigate]);

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
