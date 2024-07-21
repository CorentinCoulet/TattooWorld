import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.scss';

const Register: React.FC = () => {
    const [userType, setUserType] = useState<'client' | 'artist' | null>(null);

    const handleUserTypeChange = (type: 'client' | 'artist') => {
        setUserType(type);
    };

    return (
        <div className="register-container">
            <div className="navigation-buttons">
                <Link to="/" className="nav-button">
                    Retour à l'accueil
                </Link>
                <Link to="/login" className="nav-button">
                   Déjà un compte ?
                </Link>
            </div>
            <h1>S'enregistrer</h1>
            <div className="user-type-selection">
                <button onClick={() => handleUserTypeChange('client')} className={`user-type-button ${userType === 'client' ? 'active' : ''}`}>
                    Client
                </button>
                <button onClick={() => handleUserTypeChange('artist')} className={`user-type-button ${userType === 'artist' ? 'active' : ''}`}>
                    Artiste
                </button>
            </div>
            {userType === 'client' && <ClientForm />}
            {userType === 'artist' && <ArtistForm />}
        </div>
    );
};

// Formulaire Client
const ClientForm: React.FC = () => {
    return (
        <form className="client-form">
            <div className="form-group">
                <label htmlFor="lastName">Nom</label>
                <input type="text" id="lastName" required />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input type="tel" id="phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="preferences">Préférences</label>
                <select id="preferences" multiple>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <button type="submit" className="submit-button">S'enregistrer</button>
        </form>
    );
};

// Formulaire Artist
const ArtistForm: React.FC = () => {
    return (
        <form className="artist-form">
            <div className="form-group">
                <label htmlFor="lastname">Nom</label>
                <input type="text" id="lastname" required />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">Prénom</label>
                <input type="text" id="firstName" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Numéro de téléphone</label>
                <input type="tel" id="phone" required />
            </div>
            <div className="form-group">
                <label htmlFor="companyName">Nom d'entreprise</label>
                <input type="text" id="companyName" required />
            </div>
            <div className="form-group">
                <label htmlFor="license">Numéro de licence</label>
                <input type="text" id="license" required />
            </div>
            <div className="form-group">
                <label htmlFor="siret">numéro de SIRET/SIREN</label>
                <input type="text" id="siret" required />
            </div>
            <div className="form-group">
                <label htmlFor="specialties">Style(s) artistique(s)</label>
                <select id="specialties" multiple>
                    <option value="specialty1">Specialty 1</option>
                    <option value="specialty2">Specialty 2</option>
                    <option value="specialty3">Specialty 3</option>
                </select>
            </div>
            <button type="submit" className="submit-button">S'enregistrer</button>
        </form>
    );
};

export default Register;
