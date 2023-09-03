import React, {useState} from 'react'


const LoginForm = ({ setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   fetch('http://localhost:3000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password }),
  //   })
  //   .then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    })
  }
  
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type='username'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm