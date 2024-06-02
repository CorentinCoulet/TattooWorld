import React from 'react';
import '../styles/BurgerMenu.scss';

interface BurgerMenuProps {
    isLogged: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isLogged}) => {

    return (
        <ul className='burgerMenuOpen'>
           <li>Profil</li> 
           <li>Rendez-vous</li> 
           <li>Forum</li>
           <li>Actualités</li>
           <li>Support</li> 
           <li>Options</li>
           {isLogged ? <li>Déconnexion</li> : <li>Connexion</li>}
        </ul>
    );
 
}

export default BurgerMenu;