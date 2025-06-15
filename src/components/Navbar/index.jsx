import { NavLink } from "react-router-dom";
import "./styles.css";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar border-bottom navbar-expand-lg bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="principal-logo navbar-brand" to="/">
            (DJANGO+REACT)
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <NavLink className="estilos-links" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="estilos-links" to="contacto">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
