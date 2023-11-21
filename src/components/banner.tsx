import '../styles/banner.scss'
import { Carousel } from 'antd';
import Karousel from '../models/carousel';
import CAROUSEL from '../models/carousel-data'

import { useState } from 'react';

function Banner() {

  const [item] = useState<Karousel[]>(CAROUSEL);
  return (
    <section className='banner'>
      <div className='cover'>
        <Carousel autoplay> 
            {
              item.map((item)=> {
              return <div>
                <h1>{item.title}</h1>
                <img src={item.photo} alt="" />
              </div>}
              )
            }
        </Carousel>
      </div>
      
    </section>
  );
}

export default Banner;
