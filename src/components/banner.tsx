import '../styles/banner.scss'
import { Carousel } from 'antd'

function Banner() {
  return (
    <section className='banner'>
      <div className='cover'>
        <h1>DC VIRUNGA</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatum molestiae delectus ducimus. Reprehenderit sit impedit harum,
        </p>
      </div>
      <Carousel autoplay> </Carousel>
    </section>
  );
}

export default Banner;
