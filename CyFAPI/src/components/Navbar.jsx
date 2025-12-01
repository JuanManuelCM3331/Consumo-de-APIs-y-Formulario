import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/usuarios">Usuarios</Link>
      <Link to="/formulario">Formulario</Link>
    </nav>
  );
}
export default Navbar;
