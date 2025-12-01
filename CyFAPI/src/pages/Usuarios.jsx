import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            <Link to={`/usuarios/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Usuarios;