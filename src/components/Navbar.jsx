import React, { useState } from 'react';
import { Link } from 'react-router';
import "../css/navbar.css";

export default function Navbar() {
  const[menuOpen, setMenuOpen]=useState(false);
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="ConnectToCode home">
          <div className="logo">CtC</div>
          <span className="brand-title">ConnectToCode</span>
        </Link>

        <div className="desktop-header">
          <form className="header-search" action="#" method="get" role="search" aria-label="Site search">
            <label htmlFor="q" className="sr-only">Search projects</label>
            <input id="q" name="q" type="search" placeholder="Search projects, skills..." required />
            <label htmlFor="cat" className="sr-only">Category</label>
            <select id="cat" name="category" aria-label="Category filter" defaultValue="">
              <option value="">All categories</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Data</option>
              <option>Design</option>
            </select>
            <button type="submit" className="btn-primary">Search</button>
          </form>

          <nav className="main-nav" role="navigation" aria-label="Main navigation">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/dm">Messages</Link>
          </nav>
        </div>
        <button className="hamburger-btn" aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div id="mobile-menu" className={menuOpen ? "open" : ""}>
            <form className="header-search" action="#" method="get" role="search" aria-label="Site search">
            <label htmlFor="q" className="sr-only">Search projects</label>
            <input id="q" name="q" type="search" placeholder="Search projects, skills..." required />
            <label htmlFor="cat" className="sr-only">Category</label>
            <select id="cat" name="category" aria-label="Category filter" defaultValue="">
              <option value="">All categories</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Data</option>
              <option>Design</option>
            </select>
            <button type="submit" className="btn-primary">Search</button>
          </form>
          <nav className="main-nav" role="navigation" aria-label="Main navigation">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/dm">Messages</Link>
          </nav>
      </div>
    </header>

  );
}