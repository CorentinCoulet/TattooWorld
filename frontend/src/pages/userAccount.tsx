import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditProfileForm from '../components/EditUserForm';
import '../styles/UserAccount.scss';

const predefinedPreferences = [
  { id: 1, label: 'Notifications par email' },
];

const tattooStyles = [
  { id: 1, label: 'Tribal' },
  { id: 2, label: 'Old School' },
  { id: 3, label: 'Realiste' },
  { id: 4, label: 'Watercolor' },
  { id: 5, label: 'Geometrique' },
  { id: 6, label: 'Japonais' },
];

const UserAccount: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    phone: '01.11.11.11.11',
    address: '123 Rue Pas Là',
    preferences: new Set([1]), 
    tattooStyles: new Set([1, 3]), 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePreferenceChange = (id: number) => {
    setUserInfo((prevInfo) => {
      const newPreferences = new Set(prevInfo.preferences);
      if (newPreferences.has(id)) {
        newPreferences.delete(id);
      } else {
        newPreferences.add(id);
      }
      return { ...prevInfo, preferences: newPreferences };
    });
  };

  const handleTattooStyleChange = (selectedStyles: number[]) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, tattooStyles: new Set(selectedStyles) }));
  };

  const toggleEditing = () => setEditing(!editing);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated User Info:', userInfo);
    toggleEditing();
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ?')) {
      console.log('Compte supprimé');
    }
  };

  return (
    <div className="user-profile">
      <div className="navigation-buttons">
        <Link to="/" className="nav-link">Retour à l'accueil</Link>
        <button className="nav-button" onClick={handleDeleteAccount}>Supprimer le compte</button>
      </div>

      <div className="profile-header">
        <h1>Profil Utilisateur</h1>
      </div>

      {editing ? (
        <EditProfileForm
          userInfo={userInfo}
          predefinedPreferences={predefinedPreferences}
          tattooStyles={tattooStyles}
          onChange={handleChange}
          onPreferenceChange={handlePreferenceChange}
          onTattooStyleChange={handleTattooStyleChange}
          onSubmit={handleSubmit}
          onCancel={toggleEditing}
        />
      ) : (
        <div className="profile-info">
          <p><strong>Nom:</strong> {userInfo.name}</p>
          <p><strong>Prénom:</strong> {userInfo.surname}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Téléphone:</strong> {userInfo.phone}</p>
          <p><strong>Adresse:</strong> {userInfo.address}</p>
          <p><strong>Préférences:</strong> {predefinedPreferences.filter(p => userInfo.preferences.has(p.id)).map(p => p.label).join(', ')}</p>
          <p><strong>Styles de tatouages préférés:</strong> {tattooStyles.filter(ts => userInfo.tattooStyles.has(ts.id)).map(ts => ts.label).join(', ')}</p>
          <button className="edit-button" onClick={toggleEditing}>Modifier</button>
        </div>
      )}
    </div>
  );
};

export default UserAccount;
