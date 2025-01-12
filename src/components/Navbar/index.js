import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-brand">Invoice Manager</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <button onClick={this.props.onLogout} className="logout-button">
            Logout
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;