import { useState } from "react";
import Layout from "@/components/Layout";

export default function Registro() {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    rfc: "",
    correo: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  function onlyLetters(event) {
    const pattern = /^[a-zA-Z\s]*$/; // Expresión regular que verifica si el valor ingresado son solo letras y espacios
    const inputChar = String.fromCharCode(event.charCode); // Obtiene la tecla presionada

    if (!pattern.test(inputChar)) {
      // Comprueba si la tecla presionada no es una letra o espacio
      event.preventDefault(); // Evita que se ingrese la tecla
    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>Registro Inversor</h1>
        <label htmlFor="nombres">Nombre(s):</label>
        <input
          type="text"
          id="nombres"
          name="nombres"
          value={formData.nombres}
          onKeyPress={onlyLetters}
          onChange={handleChange}
          required
        />

        <label htmlFor="apellidos">Apellidos:</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={formData.apellidos}
          onKeyPress={onlyLetters}
          onChange={handleChange}
          required
        />

        <label htmlFor="rfc">RFC:</label>
        <input
          type="text"
          id="rfc"
          name="rfc"
          value={formData.rfc}
          onChange={handleChange}
          required
        />

        <label htmlFor="correo">Correo electrónico:</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="number"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          maxLength="10"
          required
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          minLength="8"
          required
        />

        <label htmlFor="confirmPassword">Repetir contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </Layout>
  );
}
