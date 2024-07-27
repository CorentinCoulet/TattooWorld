import React from 'react';
import '../styles/EditUserForm.scss';

interface Preference {
  id: number;
  label: string;
}

interface EditUserFormProps {
  userInfo: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    preferences: Set<number>;
    tattooStyles: Set<number>;
  };
  predefinedPreferences: Preference[];
  tattooStyles: Preference[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onPreferenceChange: (id: number) => void;
  onTattooStyleChange: (selectedStyles: number[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({
  userInfo,
  predefinedPreferences,
  tattooStyles,
  onChange,
  onPreferenceChange,
  onTattooStyleChange,
  onSubmit,
  onCancel,
}) => {
  const selectedTattooStyles = Array.from(userInfo.tattooStyles).map(id => id.toString());

  const handleTattooStyleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(event.target.selectedOptions, option => parseInt(option.value, 10));
    onTattooStyleChange(selectedValues);
  };

  return (
    <form className="edit-form" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userInfo.name}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Prénom:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={userInfo.surname}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userInfo.email}
          onChange={onChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Téléphone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={userInfo.phone}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Adresse:</label>
        <textarea
          id="address"
          name="address"
          value={userInfo.address}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label>Préférences:</label>
        <div className="preferences">
          {predefinedPreferences.map(pref => (
            <div key={pref.id}>
              <input
                type="checkbox"
                id={`preference-${pref.id}`}
                checked={userInfo.preferences.has(pref.id)}
                onChange={() => onPreferenceChange(pref.id)}
              />
              <label htmlFor={`preference-${pref.id}`}>{pref.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label>Styles de tatouages préférés:</label>
        <select
          multiple
          value={selectedTattooStyles}
          onChange={handleTattooStyleSelect}
          className="tattoo-style-select"
        >
          {tattooStyles.map(ts => (
            <option key={ts.id} value={ts.id}>
              {ts.label}
            </option>
          ))}
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="save-button">Sauvegarder</button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
