import React from 'react';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Trending from './Pages/Trending';
import Auth from './Pages/Auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './Pages/Styles.module.css';


function App() {
  return (
    <Router>
      <nav className={styles.navbar}>
        <span className={styles.navbaritem} style={{float: "left"}}>Bingewatcher's Twitter</span>
        <Link to="/" className={styles.navbaritem}>Home </Link>
        <Link to="/trending" className={styles.navbaritem}>Trending </Link>
        <Link to="/auth" className={styles.navbaritem}>About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </Router>
  );
}

export default App;
