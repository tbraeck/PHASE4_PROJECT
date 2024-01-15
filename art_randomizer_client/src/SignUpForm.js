import React, { useState } from 'react';
import './styles/Login.css';

const SignUpForm = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
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
  
  
=======
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
>>>>>>> new-name/Tate-Main

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
<<<<<<< HEAD
=======
        {error && <p className="error-message">{error}</p>} 
>>>>>>> new-name/Tate-Main
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
<<<<<<< HEAD

=======
>>>>>>> new-name/Tate-Main
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
<<<<<<< HEAD

=======
>>>>>>> new-name/Tate-Main
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="form-input"
          />
<<<<<<< HEAD


=======
>>>>>>> new-name/Tate-Main
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
