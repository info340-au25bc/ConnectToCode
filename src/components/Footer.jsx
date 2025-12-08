import React from 'react';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <div>© 2025 ConnectToCode</div>
        <Link to="/terms">Terms of Use</Link>
        <Link to="/settings">Settings</Link>
        <div className="attribution">
          Images from <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </div>
      </div>
    </footer>
  );
}