import { NavLink } from "react-router-dom";
import "../styles/nav.scss";
import { useState } from "react";
import { Popup } from "./popup";
import { SlMenu } from "react-icons/sl";


export default function NavBar() {

  const [isOpen,setIsOpen] = useState<boolean>(false);

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
        onClick={()=> setIsOpen(true)}
        >
        <SlMenu />
      </button>
      <Popup open={isOpen} onClose={()=> setIsOpen(false)}>

        <div className="it">
        <ul>
          <li>
            <NavLink to={"/"} className="link" onClick={()=> setIsOpen(false)}>
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink to={"/apropos "} className="link" onClick={()=> setIsOpen(false)}>
              APROPOS
            </NavLink>
          </li>
          
          <li>
            <NavLink to={"/actualites"} className="link" onClick={()=> setIsOpen(false)}>
              ACTUALITES
            </NavLink>
          </li>
          <li>
            <NavLink to={"/club"} className="link" onClick={()=> setIsOpen(false)}>
              CLUB
            </NavLink>
          </li>
          <li>
            <NavLink to={"/programmes"} className="link" onClick={()=> setIsOpen(false)}>
              PROGRAMMES
            </NavLink>
          </li>
        </ul>
        </div>
      </Popup>
    </nav>
  );
}
