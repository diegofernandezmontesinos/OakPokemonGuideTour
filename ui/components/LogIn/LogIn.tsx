import React, { useState } from "react";
import "./LogIn.css";
import { signIn } from "../../shares/apiService";
import logo from "../../images/logo.svg";

interface LogInProps {
  setUser: React.Dispatch<React.SetStateAction<string[]>>;
}

const LogIn: React.FC<LogInProps> = ({ setUser }) => {
  const [nombre, setNombre] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.length < 4 || nombre.length > 10) {
      setError("El nombre de usuario debe tener entre 4 y 10 caracteres.");
      return;
    }

    const contraseñaRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,}$/;
    if (!contraseñaRegex.test(contraseña)) {
      setError(
        "La contraseña debe contener al menos una mayúscula, al menos un número y una longitud mínima de 4."
      );
      return;
    }
    setError("");
    try {
      const response = await signIn({ nombre, contraseña });
      console.log("User signed in:", response);
      setUser([nombre]);
      localStorage.setItem("user", JSON.stringify({ nombre, contraseña }));
      console.log("Usuario guardado en localStorage:", { nombre, contraseña });
    } catch (error) {
      console.error("Error signing in:", error);
      setError("Error al iniciar sesión. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <section className="login-section">
      <div className="login-banner">
        <img src={logo} alt="Pokémon logo" />
        <p>Login into your Pokedex App</p>
      </div>
      <form className="login-formulario" onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="icon-username"></i>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre de usuario"
          />
        </div>
        <div className="input-container">
          <i className="icon-password"></i>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  );
};

export default LogIn;
