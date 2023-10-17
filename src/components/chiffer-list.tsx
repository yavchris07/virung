import React, { useState } from 'react';
import CHIFFER from '../models/chiffer-data';
import Chiffer from '../models/chiffer';
import '../styles/chiffer-list.scss'

function ChifferList() {
  const [chiffer] = useState<Chiffer[]>(CHIFFER);
  return (
    <div className='chiffer'>
      {
        chiffer.map((chif,index)=>(
          <div className='chif' key={index}>
            <h2>{chif.title}</h2>
            <p>{chif.type}</p>
            <span>{chif.resum}</span>
          </div>
        ))
      } 
    </div>
  );
}

export default ChifferList;
