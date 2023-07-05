import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Home from "../Home";
import "../Login/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, loading] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <Home />;
  }

  return (
    <div className="form-container">
      <form>
        <div className="input">
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email aqui..."
            required
          />

          <label>Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </div>
        <div className="container-button">
          <button type="submit" onClick={handleSignIn}>
            Entrar
          </button>
        </div>
        <Link className="link" to="/register">Crie sua conta</Link>
      </form>
     
    </div>
  );
}

export default Login;
