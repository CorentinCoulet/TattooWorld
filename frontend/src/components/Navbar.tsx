import React, { useState } from "react";
import '../styles/Navbar.scss';
import tattooLogo from '../assets/tattooLogo.png';

const Navbar: React.FC = () => {

    const [svgVisible, setSvgVisible] = useState(true);

    const toggleSvgVisibility = () => {
        setSvgVisible(!svgVisible);
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
                    <div onClick={toggleSvgVisibility}>
                        {svgVisible ? (
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="1em" 
                                height="1em" 
                                viewBox="0 0 24 24"
                                >
                                <path fill="currentColor" 
                                    fill-rule="evenodd" 
                                    d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1" 
                                    clip-rule="evenodd"
                                />
                            </svg>
                        ):(
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="1em" height="1em" 
                                viewBox="0 0 24 24">
                                <g 
                                    fill="none" 
                                    stroke="currentColor" 
                                    stroke-linecap="round" 
                                    stroke-width="2">
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
                        )}
                        
                        
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