import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import "../styles/Home.scss";
import artistsData from "../../../bdd/artists.json";
import exempleLogo from "../assets/logoExempleTatoueur.png";
import banner from "../assets/banner.png";

const Home: React.FC = () => {

    return (
        <div className="artistPositions">
            <Navbar />
            <Searchbar />
            <div>
               {artistsData.map((artist: any, index, number) => (
                    <div className="artistsList" key={index}>
                        <div><img src={banner} alt="bannière d'entreprise" /></div>
                        <div><img src={exempleLogo} alt="logo d'entreprise" /></div>
                        <div className="artistInformation">
                            <div>
                                <a>{artist.location.city}, {artist.location.country}</a>
                                <p>Note/Avis</p>
                            </div>
                            <div>
                                <div className="stylesTattooArtist">
                                    {artist.styles.map((style: string, index: number) => (
                                        <span key={index}>{style}</span>
                                    ))}
                                </div>
                                <p>{artist.name}</p>
                                <p>{artist.description}</p>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </div>    
    );
};

export default Home;