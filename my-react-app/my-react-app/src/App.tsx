import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Product';
import Contact from '../src/contact';

import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <div className="logo">HobArt</div>
          <nav>
            <ul>
              <li><Link to="/">მთავარი</Link></li>
              <li><Link to="/about">ჩვენს შესახებ</Link></li>
              <li><Link to="/products">პროდუქცია</Link></li>
              <li><Link to="/contact">კონტაქტი</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 HobArt. ყველა უფლება დაცულია.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
