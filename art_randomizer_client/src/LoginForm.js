import React, {useState} from 'react'


const LoginForm = ({ setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
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
  
  return (
    <div>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
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
        />
        <button className='form-button' type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm