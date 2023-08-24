import React, {useState} from 'react'

const SignUpForm = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)

        fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                passwordConfirmation
            }),
        })
        .then((r) => {
            setLoading(false);
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } 
            // else {
            //     // r.json().then((err) => setErrors(err.errors))
            // }
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
            <input 
            id="username"
            type='text' 
            placeholder='username'
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
       
        <label htmlFor="password"> Password </label>
            <input
            id="password"
            type='text'
            placeholder='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />

        <label htmlFor="password">Password Confirmation</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                autoComplete="current-password"
        />
      
        <button type='submit' className='signup-button'> {loading ? "Loading..." : "Sign Up"} </button>
      
    </form>
  )
}

export default SignUpForm
