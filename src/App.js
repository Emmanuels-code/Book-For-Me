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
        {/* Background Image and Overlay */}
        <div className="background-container">
          <div className="background-overlay"></div>
          <header className="App-header">
            <h1>Book For Me</h1>
            <h2> Book For you!</h2>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<CategorySelector setCategory={setCategory} />} />
              <Route path="/page-count" element={<PageCountSelector setPageCount={setPageCount} />} />
              <Route path="/suggestions" element={<BookList category={category} pageCount={pageCount} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
