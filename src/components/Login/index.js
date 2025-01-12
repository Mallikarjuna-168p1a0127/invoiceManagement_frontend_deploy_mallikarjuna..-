import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    if (!email || !password) {
      this.setState({ error: 'Please fill in all fields' });
      return;
    }

    // Simulate login validation
    if (email === 'test@test.com' && password === 'password') {
      localStorage.setItem('user', JSON.stringify({ email }));
      this.props.onLogin();
      this.props.history.push('/');
    } else {
      this.setState({ error: 'Invalid credentials' });
    }
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
          <h2>Login</h2>
          {this.state.error && <div className="error">{this.state.error}</div>}
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
          <button type="submit">Login</button>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;