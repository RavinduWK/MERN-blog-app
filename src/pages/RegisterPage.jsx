import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import bg from "../assets/bg.png";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const API_URL = process.env.REACT_APP_API_URL;

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
      toast.success("Registration Successful");
    } else {
      toast.error("Registration Failed");
    }
  }

  return (
    <div className="container">
      <img className="bg" src={bg} alt="" />
      <form className="register" onSubmit={register}>
        <img src={logo} alt="logo" />
        <h1>Registration Portal</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
        <div className="exists">
          <span>Already have an account? </span>
          <button>LOG IN</button>
        </div>
        <ToastContainer hideProgressBar newestOnTop theme="colored" />
      </form>
    </div>
  );
}
