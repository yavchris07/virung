import React from 'react';
import '../styles/middle-banner.scss'
import ChifferList from './chiffer-list';

function MiddleBanner() {
  return (
    <section className='middle-banner'>
      <div className='cover'>
        <ChifferList />
        <h3>Chiffres d'affaires : xxxxxxx $</h3>
      </div>
    </section>
  );
}

export default MiddleBanner;
