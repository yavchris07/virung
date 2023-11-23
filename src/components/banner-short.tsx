import '../styles/banner1.scss'

interface titleProps{
  title:string
}

function BannerShort({title}:titleProps) {
  return (
    <section className='banner1'>
       <div className='cover-short'>
        <h1>{title}</h1>
        <p>L'equipe qui nous rend fier</p>
       </div>
    </section>
  );
}

export default BannerShort;
