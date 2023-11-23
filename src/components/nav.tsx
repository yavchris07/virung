import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import { useState } from "react";

interface navProps{
  open? : boolean,
  // setOpen: () => void
}

export default function NavBar({open}:navProps) {

  const [isOpen,setIsOpen] =  useState(open)
  return (
    <nav>
      <h2>DC Virunga</h2>
      <div className="items">
        <ul>
          <li>
            <NavLink to={"/"} className="link">
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink to={"/apropos "} className="link">
              APROPOS
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/actualites"} className="link">
              ACTUALITES
            </NavLink>
          </li>
          <li>
            <NavLink to={"/club"} className="link">
              CLUB
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programmes"} className="link">
              PROGRAMMES
            </NavLink>
          </li>
        </ul>
      </div>
      <button 
        className="menu"
        onClick={()=> setIsOpen(isOpen)}
        >
        x
      </button>
    </nav>
  );
}
