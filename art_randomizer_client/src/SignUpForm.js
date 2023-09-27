import React, { useState } from 'react';
import './styles/Login.css';

const SignUpForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Add error state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      passwordConfirmation,
    }),
  })
    .then((response) => {
      setLoading(false);
      if (response.ok) {
        return response.json();
      } else {
        return response.json().then((errorData) => {
          throw new Error(errorData.message);
        });
      }
    })
    .then((user) => {
      setUser(user);
    })
    .catch((error) => {
      setLoading(false);
      setError('Username must be unique. Password must be at least 8 characters long');
      setTimeout(() => {
        setError(null);
      }, 3000); 
    
    });
  };

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} 
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="form-input"
          />
          <button className="form-button" type="submit">
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
