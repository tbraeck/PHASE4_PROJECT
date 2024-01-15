import React, { useState } from 'react';

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD
  const [errors, setErrors] = useState(null); // Add error state


  
  const handleSubmit = (e) => {
    e.preventDefault();
=======
  const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault()
>>>>>>> new-name/Tate-Main

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
<<<<<<< HEAD
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

=======
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else {
        setError('Login failed. Please check your username and password.');
        setTimeout(() => {
          setError(null);
        }, 3000); 
      }
    })
    .catch((error) => {
      setError('An error occurred while trying to log in. Please try again later.');
    });
  }
  
>>>>>>> new-name/Tate-Main
  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
<<<<<<< HEAD
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
=======
        <input 
          type='username'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='form-input'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='form-input'
>>>>>>> new-name/Tate-Main
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
