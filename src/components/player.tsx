import React from 'react';
import Player from '../models/player';
import '../styles/player.scss';

interface playerProp{
    player: Player
}
export default function PlayerCard({player}:playerProp) {

  return (
    <div className='player'>
        <div className='photo'>
            <img src={player.photo} alt="" />
        </div>
        <div className='note'>
            <h4>Noms : {player.name}</h4>
            <p>Poste : {player.post}</p>
            <p>Dorsal :{player.dorsal}</p>
        </div>
    </div>
  )
}
