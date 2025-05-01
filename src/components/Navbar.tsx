import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex gap-4">
      <Link to="/">Accueil</Link>
      <Link to="/profile">Profil</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
