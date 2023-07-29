import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../UserContext";
import logo from '../assets/logo.png';
import bg from '../assets/bg.png';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("https://wickramblogs-api.onrender.com/login", {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (response.ok) {
      toast.success("Login Successful");
      response.json().then(userinfo => {
        setUserInfo(userinfo);
        setRedirect(true);
      })
      
    } else {
      toast.error("Invalid credentials");
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="container">
      <img className="bg" src={bg} alt="" />
      <form className="login" onSubmit={login}>
      <img src={logo} alt="logo" />
      <h1>Login Portal</h1>
      <span>Please log in to your account</span>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={ev => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={ev => setPassword(ev.target.value)}
      />
      <button>Login</button>
      <span>Forgot password?</span>
      <div className="new">
        <span>Don't have an account? </span>
        <button>CREATE NEW</button>
      </div>
      

      <ToastContainer hideProgressBar newestOnTop theme="colored" />
    </form>
    </div>
    
  );
}
