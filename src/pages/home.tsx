import Banner from "../components/banner";
import AlllTitle from "../components/all-title";
import '../styles/home.scss';
import { useState } from "react";
import Card from "../components/card";
import CARD from "../models/card-data";
import Cards from "../models/card";

export default function Home() {

  const [cards] = useState<Cards[]>(CARD)

  return (
    <>
      <Banner />
      <AlllTitle 
        title="Actualités du club"
        sub="DC VIRUNGA"
      />
      <div className="container">
        {
            cards.map((items)=> {
              return <Card
                id={items.id} 
                title={items.title}
                photo={items.photo}
                type={items.type}
                date={items.date}
              />
            })
        }
      </div>

      <div className="link">
        <a href="./actualites">Plus d'actualités</a>
      </div>

      <AlllTitle 
        title="Match du jour"
        sub="DC VIRUNGA"
      />

      <div className="match">
        <div className="cover">
          <p>DC Virunga vs AS Kabasha</p>
          <span>Ligue 1</span>
        </div>
      </div>

      <AlllTitle 
        title="Entrainement"
        sub="DC VIRUNGA"
      />
      
      <AlllTitle 
        title="Nos partenaires"
        sub="RELATIONSHIP"
      />

    </>
  );
}
