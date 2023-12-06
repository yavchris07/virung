import React from 'react';
import { useParams } from 'react-router-dom';
import CARD from "../models/card-data";
import Cards from "../models/card";
import Row from '../components/row';


export const Actualite = () => {

  const {id} = useParams<string>();
    const vl = parseInt(id!)
    const [article] = React.useState<Cards[]>(CARD);
    let act = article[vl];
    console.log('actu : ',act);

  return (
    <>
      <Row />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque corporis magni ipsa. At dolores, vero, eaque est possimus eos mollitia beatae tempora iste accusamus provident corporis et expedita, laudantium voluptate.
    </>
  )
}
