import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CategorySelector from './components/CategorySelector';
import PageCountSelector from './components/PageCountSelector';
import Suggestions from './components/Suggestions';
import './App.css';
import logo from './boy.png';  // Assuming you have a logo file saved as logo.png

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
            <h2>Books For You!</h2>
            {/* Quotes section */}
            <div className="quotes-section">
              <p>“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</p>
              <p>— George R.R. Martin</p>
              <p>“Think before you speak. Read before you think.”</p>
              <p>— Fran Lebowitz</p>
              <p><strong>“Let us remember: One book, one pen, one child, and one teacher can change the world.”</strong></p>
              <p>— Malala Yousafzai</p>
            </div>
            {/* Logo section */}
            <div className="logo-container">
              <img src={logo} alt="logo" className="logo" />
            </div>
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
