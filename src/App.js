// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelector from './components/CategorySelector';
import PageCountSelector from './components/PageCountSelector';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [category, setCategory] = useState('');    // Manage category in App state
  const [pageCount, setPageCount] = useState('');  // Manage page count in App state

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Book-For-Me: Book Recommender</h1>
        </header>
        <main>
          <Routes>
            {/* Use element prop and wrap components in JSX */}
            <Route path="/" element={<CategorySelector setCategory={setCategory} />} />
            <Route path="/page-count" element={<PageCountSelector setPageCount={setPageCount} />} />
            <Route path="/suggestions" element={<BookList category={category} pageCount={pageCount} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
