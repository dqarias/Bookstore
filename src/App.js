import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/Books';
import NavBar from './components/Navbar';
import Categories from './components/Categories';
import NoMatch from './screens/NoMatch';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Provider>
      </Router>

    </div>
  );
}

export default App;
