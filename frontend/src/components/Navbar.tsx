import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.scss';
import tattooLogo from '../assets/logoYinYang.png';
import BurgerMenu from "./BurgerMenu";

const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const isLogged = false;

    return (
        <div className="navbar">
            <div className="navbar-entity">
                <div>
                    <Link to="/">
                        <a><img src={tattooLogo} alt="logo du site" /></a>
                    </Link>
                    <Link to="/">
                        <p>TattooWorld</p>
                    </Link>
                </div>
            
                <div>
                    <Link to="/login">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                    </Link>
                    <div className="burgerMenu">
                        {isMenuOpen ? (
                            <div className="burgerMenuIfOpen">
                                <svg 
                                onClick={toggleMenu}
                                xmlns="http://www.w3.org/2000/svg" 
                                width="1em" height="1em" 
                                viewBox="0 0 24 24">
                                <g 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeWidth="2">
                                    <path d="M5 5L19 5">
                                        <animate 
                                            fill="freeze" 
                                            attributeName="d" 
                                            begin="0.2s" 
                                            dur="0.4s" 
                                            values="M5 5L19 5;M5 5L19 19"
                                        />
                                    </path>
                                    <path d="M5 12H19">
                                        <animate 
                                            fill="freeze" 
                                            attributeName="d" 
                                            dur="0.4s" 
                                            values="M5 12H19;M12 12H12"
                                        />
                                        <set 
                                            attributeName="opacity" 
                                            begin="0.4s" 
                                            to="0"
                                        />
                                    </path>
                                    <path d="M5 19L19 19">
                                        <animate 
                                            fill="freeze" 
                                            attributeName="d" 
                                            begin="0.2s" 
                                            dur="0.4s" 
                                            values="M5 19L19 19;M5 19L19 5"
                                        />
                                    </path>
                                </g>
                                </svg>
                                <BurgerMenu isLogged={isLogged} />
                            </div>
                        ):(
                            <svg 
                                onClick={toggleMenu}
                                xmlns="http://www.w3.org/2000/svg" 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 24 24"
                                >
                                <path fill="currentColor" 
                                    fillRule="evenodd" 
                                    d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1" 
                                    clipRule="evenodd"
                                />
                            </svg> 
                        )}
                        
                    </div>
                </div>
            </div> 
            {isMenuOpen && <div className="overlayBurgerMenu" onClick={toggleMenu}></div>}        
        </div>
    )
}

export default Navbar;