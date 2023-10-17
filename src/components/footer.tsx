// import React from 'react';
import '../styles/footer.scss'
import Item from '../models/items'
import TODOS from '../models/items-data';
import { useState } from 'react';
import icon from '../assets/icons/icon.png';
import fb from "../assets/icons/fb.png";
import inst from "../assets/icons/inst.png";
import twit from "../assets/icons/twit.png";

// type items = {
//     todos:Item[];
// }

function Footer() {
const [items]=useState<Item[]>(TODOS);

  return (
    <div className='footer'>
      <div className='news-letters'>
        <div className='story'>
            {
                items.map((item,index) =>(
                    <div className='card' key={index}>
                        <h1>{item.title}</h1>
                        <span>{item.element}</span>
                        <span>{item.type}</span>
                        <span>{item.type1}</span>
                        <p>{item.resume}</p>
                    </div>
                ))
            }
        </div>
     
        <div className='mailing'>
            <h4>Nous contacter par mail</h4>
            <p>Faites nous parvenir vos opinions et suggestions</p>
            <div className='control'>
                <label htmlFor="">Adresse mail</label>
                <input 
                    type="email" 
                    name="" 
                    id="" 
                    placeholder='Email'
                />
                {/* <label htmlFor="">Message</label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder='Message'
                /> */}
                <div className='checkbox'>
                    <input 
                    type="checkbox" 
                    />
                    <p>Je désire recevoir de mails de votre part</p>
                </div>
                <button>Soumettre</button>
            </div>
        </div>
      </div>

      <div className='foot'>
        <img src={icon} alt="icon" />
        <p>Jems energy sarl © 2023</p>
        <div className='links'>
            <img src={fb} alt="fg" />
            <img src={inst} alt="inst" />
            <img src={twit} alt="twit" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
