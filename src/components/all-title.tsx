import { type } from 'os'
import React from 'react'

type titleProps ={
    title:string;
    sub:string;
}
const AlllTitle = ({title,sub}:titleProps) => {
  return (
    <div className='title'>
        <h4>{sub}</h4>
        <h1>{title}</h1>
    </div>
  )
}

export default AlllTitle