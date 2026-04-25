import { useState } from "react";
import Swal from "sweetalert2";
import "./styles/form.css";

const Form = () => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("contacto", JSON.stringify(data));

    console.log(data);

    Swal.fire("Mensaje enviado", "Datos guardados correctamente", "success");

    setData({
      nombre: "",
      apellido: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div className="form-card">
      <div className="alert">
        Este es un formulario de contacto. Completa los campos para enviarnos tu mensaje.
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <input name="nombre" placeholder="Nombre" onChange={handleChange} required />
          <input name="apellido" placeholder="Apellido" onChange={handleChange} required />
        </div>

        <input name="email" placeholder="Email" onChange={handleChange} required />

        <select name="asunto" onChange={handleChange} required>
          <option value="">Selecciona un asunto</option>
          <option>Consulta general</option>
          <option>Información del producto</option>
          <option>Estado del envío</option>
          <option>Devoluciones</option>
          <option>Otro</option>
        </select>

        <textarea
          name="mensaje"
          placeholder="Escribe tu mensaje..."
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default Form;