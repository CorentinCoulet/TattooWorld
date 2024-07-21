import React from 'react';
import '../styles/BurgerMenu.scss';
import { Link } from 'react-router-dom';

interface BurgerMenuProps {
    isLogged: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isLogged}) => {

    return (
        <ul className='burgerMenuOpen'>
           {isLogged ? <li>Profil</li> : ''}
           {isLogged ? <li>Rendez-vous</li> : ''} 
           <li>Forum</li>
           <li>Actualités</li>           
           {isLogged ? <li>Support</li> : ''}
           {isLogged ? <li>Options</li> : ''}
           {isLogged ? 
            <Link to="logout"><li>Déconnexion</li></Link> 
            : 
            <Link to="login"><li>Connexion</li></Link>
           }
        </ul>
    );
 
}

export default BurgerMenu;