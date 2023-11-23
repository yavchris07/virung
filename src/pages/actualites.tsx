import BannerShort from '../components/banner-short'
import AlllTitle from '../components/all-title';
import '../styles/actu.scss';
import { useState } from "react";
import Card from "../components/card";
import CARD from "../models/card-data";
import Cards from "../models/card";

export const Actualites = () => {
    const [cards] = useState<Cards[]>(CARD)
  return (
    <>
        {/* <Banner /> */}
        <BannerShort 
            title='SAVOIR PLUS SUR TON EQUIPE !'
        />
        <AlllTitle 
        title="Plus d'actualités !"
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
      
    </>
  )
}
