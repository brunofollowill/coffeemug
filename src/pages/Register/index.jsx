import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Login from "../Login";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSingOut = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  if (loading) {
    return <Login />;
  } else {
    <p>erro</p>
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
            placeholder="Registre seu emai aqui..."
            required
          />

          <label>Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Registre sua senha aqui..."
            required
          />
        </div>
        <div className="container-button">
        <button type="submit" onClick={handleSingOut}>
          Cadastrar
        </button>

        </div>
        
        <Link className="link" to="/">Entre na sua conta</Link>
      </form>
     
    </div>
  );
}

export default Register;
