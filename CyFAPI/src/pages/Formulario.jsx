import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            type="email"
          />
        </div>
        <div>
          <label>Mensaje:</label>
          <textarea
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {enviado && <p>¡Formulario enviado!</p>}
    </div>
  );
}
export default Formulario;
