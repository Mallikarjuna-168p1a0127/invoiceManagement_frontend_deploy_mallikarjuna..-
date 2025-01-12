import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      this.setState({ error: 'Please fill in all fields' });
      return;
    }

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify({ name, email }));
    this.props.history.push('/login');
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  };

  render() {
    return (
      <div className="auth-container">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
          {this.state.error && <div className="error">{this.state.error}</div>}
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;