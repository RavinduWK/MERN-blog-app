import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/profile`, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch(`${API_URL}/logout`, {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <div className="navbar">
      <header>
        <Link to="/" className="logo">
          Wickram Blogs
        </Link>
        <nav>
          {username && (
            <>
              <span className="greeting">Hello, {username}</span>
              <Link className="btn" to="/create">
                Create new post
              </Link>
              <a className="btn" onClick={logout}>
                Logout
              </a>
            </>
          )}
          {!username && (
            <>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/register">
                Register
              </Link>
            </>
          )}
        </nav>
      </header>
    </div>
  );
}
