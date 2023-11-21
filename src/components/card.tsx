import React from 'react'

interface cardProps{
    id:number;
    title:string;
    photo:string
    type:string;
    date:string;
}

function Card({id,title,photo,type,date}:cardProps) {
  return (
    <div className='card'>
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