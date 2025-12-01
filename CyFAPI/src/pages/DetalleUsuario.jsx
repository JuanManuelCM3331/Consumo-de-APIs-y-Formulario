import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DetalleUsuario() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUsuario(data));
  }, [id]);

  if (!usuario) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Detalle de Usuario</h2>
      <p><strong>Nombre:</strong> {usuario.name}</p>
      <p><strong>Email:</strong> {usuario.email}</p>
      <p><strong>Teléfono:</strong> {usuario.phone}</p>
      <p><strong>Website:</strong> {usuario.website}</p>
    </div>
  );
}
export default DetalleUsuario;