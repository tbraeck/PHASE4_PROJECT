import React, { useState } from 'react';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(null); // Add error state


  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user);
          });
        } else {
          res.json().then((error) => setErrors(error.errors))
          setTimeout(() => {
            setErrors(null);
          }, 3000);
          return;
        }
      })
      .catch((error) => {
        console.error('Error during login:', error);
        setErrors('An error occurred during login. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {errors && <p className="error-message">{errors}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
      {errors && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          </div>
        )}
    </div>
  );
};

export default LoginForm;
