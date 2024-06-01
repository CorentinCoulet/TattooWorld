import React, { useState } from "react";
import '../styles/Navbar.scss';
import tattooLogo from '../assets/logoYinYang.png';
import BurgerMenu from "./BurgerMenu";

const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="navbar">
            <div className="navbar-entity">
                <div>
                    <a><img src={tattooLogo} alt="logo du site" /></a>
                    <p>TattooWorld</p>
                </div>
            
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
                    <div onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg 
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
                        ):(
                            <svg 
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
                        {isMenuOpen && <BurgerMenu />}
                    </div>
                </div>
            </div> 
            <div className="navbar-tab">
                <div>salut</div>
                <div>yo</div>
                <div>coucou</div>
            </div>
        </div>
    )
}

export default Navbar;