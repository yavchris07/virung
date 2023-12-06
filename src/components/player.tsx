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
            <h4>{player.name}</h4>
            <p>{player.post}</p>
            <p>{player.dorsal}</p>
        </div>
    </div>
  )
}
