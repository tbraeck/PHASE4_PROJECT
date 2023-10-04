import React, { useState } from 'react';
import './styles/Login.css';

const SignUpForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setLoading(true);
  
    fetch("/signup", {
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
      .then((r) => {
        setLoading(false);
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          r.json().then((error) => setErrors(error.errors))
          setTimeout(() => {
            setErrors(null);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
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
          {errors && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
