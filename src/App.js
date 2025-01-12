import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import InvoiceForm from './components/InvoiceForm';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  state = {
    isAuthenticated: false
  };

  handleLogin = () => {
    this.setState({ isAuthenticated: true });
  };

  handleLogout = () => {
    this.setState({ isAuthenticated: false });
    localStorage.removeItem('user');
  };

  componentDidMount() {
    const user = localStorage.getItem('user');
    if (user) {
      this.setState({ isAuthenticated: true });
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
          {this.state.isAuthenticated && <Navbar onLogout={this.handleLogout} />}
          <Routes>
            <Route
              path="/"
              element={
                !this.state.isAuthenticated ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Home />
                )
              }
            />
            <Route
              path="/login"
              element={<Login onLogin={this.handleLogin} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/invoice/new"
              element={
                !this.state.isAuthenticated ? (
                  <Navigate to="/login" replace />
                ) : (
                  <InvoiceForm />
                )
              }
            />
            <Route
              path="/invoice/edit/:id"
              element={
                !this.state.isAuthenticated ? (
                  <Navigate to="/login" replace />
                ) : (
                  <InvoiceForm />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;