import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelector from './components/CategorySelector';
import PageCountSelector from './components/PageCountSelector';
import Suggestions from './components/Suggestions';
import './App.css';

function App() {
  const [category, setCategory] = useState('');
  const [pageCount, setPageCount] = useState('');

  return (
    <Router>
      <div className="App">
        <div className="background-container">
          <div className="background-overlay"></div>
          <header className="App-header">
            <h1>Book For Me</h1>
            <h2>Book For You!</h2>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<CategorySelector setCategory={setCategory} />} />
              <Route path="/page-count" element={<PageCountSelector setPageCount={setPageCount} />} />
              <Route path="/suggestions" element={<Suggestions category={category} pageCount={pageCount} />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;