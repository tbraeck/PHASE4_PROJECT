import React, {useState, useContext} from 'react'
import LoginForm from './LoginForm';
import SignUpForm from "./SignUpForm";
import { UserContext } from './contexts/UserContext';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const {setUser} = useContext(UserContext);

  return (
    <div className="login-form">
      <h2 className="tagline">Welcome to the Drawing Randomizer!</h2>
      {showLogin ? (
        <>
          <LoginForm setUser={setUser}/>
          <p className="accountquestion">
            Don't have an account?</p> &nbsp;
            <button onClick={() => setShowLogin(false)}>
              Sign Up
            </button> 
        </>
      ) : (
        <>
          <SignUpForm  setUser={setUser}/>
          <p className="accountquestion">
            Already have an account?</p> &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
        </>
      )}
    </div>
  );
}



export default Login
