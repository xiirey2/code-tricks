import React from 'react'
import './Header.css'

function Header() {
    return (
      <div className="header">
        <div className="logo">
          <div className="logo-part1">
            <strong>Code</strong>
          </div>
          <div className="logo-part2">
            <span className="text">Tricks</span>
          </div>
        </div>
        <form action="" className="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>
        <div className="nav-bar">
          <div className="nav-option">
            <strong>JavaScript</strong>
          </div>
          <div className="nav-option">
            <strong>Python</strong>
          </div>
          <div className="nav-option">
            <strong>Java</strong>
          </div>
          <div className="nav-option">
            <strong>C++</strong>
          </div>
        </div>
      </div>
    );
}

export default Header
