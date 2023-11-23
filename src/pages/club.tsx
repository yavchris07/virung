import AlllTitle from "../components/all-title"
import BannerShort from "../components/banner-short"
import { ClubCard } from "../components/club-card";
import '../styles/club.scss';

export const Club = () => {
  return (
    <>
    <BannerShort title="NOTRE CLUB ET EQUIPE" />
    <AlllTitle 
        title="Le comité"
        sub="NOTRE CLUB"
    />

    <div className="c">
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
    </div>

    <AlllTitle 
        title="Les coach"
        sub="NOTRE CLUB"
    />
     <div className="c">
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
    </div>
    <AlllTitle 
        title="Les joueurs"
        sub="NOTRE CLUB"
    />
     <div className="c">
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
    </div>
    <AlllTitle 
        title="Les membres"
        sub="NOTRE CLUB"
    />
     <div className="c">
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
        <ClubCard />
    </div>
    </>
  )
}
