import React from 'react'
import { NavLink } from 'react-router-dom'

export const Popup = () => {
  return (
    <div> 
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
    </div>
  )
}
