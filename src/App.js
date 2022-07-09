import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import NavBar from './components/Navbar';
import Categories from './components/Categories';
import NoMatch from './screens/NoMatch';
import 'App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
