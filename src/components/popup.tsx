import React from 'react';
import '../styles/pop.scss';
import { MdClose } from "react-icons/md";

interface navProps{
  open: boolean,
  children: React.ReactNode,
  onClose: ()=> void
}

const CONTAINER = {
  // background :'#000',
  // fontSize:'20px',
  // color:'#fff',
  // width:'100%',
  // // position: 'absolute',
  // marginTop:'130px',
  // zIndex:1000
}

// const CONTAINERS = {}

export const Popup = ({open,children,onClose}:navProps) => {
  if(!open) return null 

  return (
    <div className='pop-up-container'> 
      <div className='pop-up'>
        <button 
          className='pop'
          onClick={onClose} 
        >
          <MdClose />
        </button>
        {children}
      </div>
    </div>
  )
}
