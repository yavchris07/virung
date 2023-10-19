import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.scss";

export default function NavBar() {
  return (
    <nav>
      <div className="items">
        <h2>DC Virunga</h2>
        <ul>
          <li>
            <NavLink to={"/"} className="link">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={"/apropos"} className="link">
              Apropos
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="link">
              match
            </NavLink>
          </li>

          <li>
            <NavLink to={"/contact"} className="link">
              Ligue 1
            </NavLink>
          </li>

          <li>
            <NavLink to={"/contact"} className="link">
              Ligue 2
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="link">
              Boutique
            </NavLink>
          </li>
          <li>
            <NavLink to={"/apropos"} className="link">
              Actualites
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="link">
              Club
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className="link">
              Equipe
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
