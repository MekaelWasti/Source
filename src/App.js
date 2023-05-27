// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import logo from "./assets/logo.jpg";

function App() {

  const [isNavBarCollapsed, setIsNavBarCollapsed] = useState(true);

  const toggleNavBar = () => {
    setIsNavBarCollapsed(!isNavBarCollapsed);
  };

  return (
    <Router>
      <div>
        <nav className={`nav-bar ${isNavBarCollapsed ? "collapsed" : "open"}`}>
          <ul>
            {/* Logo */}
            <li>
              <svg width="100" height="100">
                <defs>
                  <clipPath id="logo-clip">
                    <circle cx="50" cy="50" r="30" />
                  </clipPath>
                </defs>
                <Link to="/" onClick={toggleNavBar}>
                  <image
                    href={logo}
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    clipPath="url(#logo-clip)"
                  />
                </Link>
              </svg>
            </li>
            {/* Logo */}
            {!isNavBarCollapsed && (
              <>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/policy">POLICY</Link>
            </li>
            </>
            )}
          </ul>
        </nav>

        <div className="App">
          <header className="App-header">
            {/* <NavBar></NavBar> */}
            {/* <HomePage></HomePage> */}

            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
