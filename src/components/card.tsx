import React from 'react'
import { useNavigate } from 'react-router-dom';

interface cardProps{
    id:number;
    title:string;
    photo:string
    type:string;
    date:string;
}

function Card({id,title,photo,type,date}:cardProps) {

  const nv = useNavigate();
  
  return (
    <div className='card' onClick={()=> nv('/actualite/'+id)}>
        <div className='pic'>
            <img src={photo} alt="" />
        </div>
        <h4>{title}</h4>
        <div className='under'>
            <span className='type'>{type}</span>
            <span className='date'>{date}</span>
        </div>
    </div>
  )
}

export default Card