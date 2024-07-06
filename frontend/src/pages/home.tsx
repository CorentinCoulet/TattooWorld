import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import "../styles/Home.scss";
import exempleLogo from "../assets/logoExempleTatoueur.jpg";
import banner from "../assets/bannerExample.jpg";

interface Artist {
    name: string;
    location: {
        city: string;
        country: string;
    };
    styles: string[];
    description: string;
}

const artistsData: Artist[] = [
    {
        name: "Nom de l'artiste 1",
        location: {
            city: "Ville 1",
            country: "Pays 1"
        },
        styles: ["Style 1", "Style 2", "Style 3"],
        description: "Description de l'artiste 1"
    },
    {
        name: "Nom de l'artiste 2",
        location: {
            city: "Ville 2",
            country: "Pays 2"
        },
        styles: ["Style 4", "Style 5", "Style 6"],
        description: "Description de l'artiste 2"
    },
];

const Home: React.FC = () => {

    return (
        <div className="artistPositions">
            <Navbar />
            <Searchbar />
            <div>
               {artistsData.map((artist: Artist, index: number) => (
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
                                    {artist.styles.map((style: string, styleIndex: number) => (
                                        <span key={styleIndex}>{style}</span>
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