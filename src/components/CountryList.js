import React from 'react';
import StateList from './StateList';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const CountryList = ({
  countries,
  onAddCountry,
  onUpdateCountry,
  onDeleteCountry,
  onAddState,
  onUpdateState,
  onDeleteState,
  onAddCity,
  onUpdateCity,
  onDeleteCity
}) => {
  const handleAddCountry = () => {
    const name = prompt('Enter country name:');
    if (name && name.trim()) {
      onAddCountry(name.trim());
    }
  };

  const handleUpdateCountry = (id, currentName) => {
    const name = prompt('Enter new country name:', currentName);
    if (name && name.trim() && name !== currentName) {
      if (window.confirm(`Are you sure you want to update ${currentName} to ${name}?`)) {
        onUpdateCountry(id, name.trim());
      }
    }
  };

  const handleDeleteCountry = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name} and all its states and cities?`)) {
      onDeleteCountry(id);
    }
  };

  return (
    <div className="country-section">
      <div className="section-header">
        <h2 className="section-title">Countries</h2>
        <button
          onClick={handleAddCountry}
          className="btn btn-primary"
        >
          <PlusCircle size={18} />
          Add Country
        </button>
      </div>

      {countries.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-text">No countries added yet. Click the button above to add your first country.</p>
        </div>
      ) : (
        <div>
          {countries.map(country => (
            <div key={country.id} className="country-card">
              <div className="country-header">
                <h3 className="country-name">{country.name}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateCountry(country.id, country.name)}
                    className="btn-icon btn-edit"
                    title="Edit Country"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteCountry(country.id, country.name)}
                    className="btn-icon btn-delete"
                    title="Delete Country"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <div className="country-content">
                <StateList
                  countryId={country.id}
                  states={country.states}
                  onAddState={(name) => onAddState(country.id, name)}
                  onUpdateState={(stateId, name) => onUpdateState(country.id, stateId, name)}
                  onDeleteState={(stateId) => onDeleteState(country.id, stateId)}
                  onAddCity={(stateId, name) => onAddCity(country.id, stateId, name)}
                  onUpdateCity={(stateId, name) => onUpdateCity(country.id, stateId, name)}
                  onDeleteCity={(stateId, cityId) => onDeleteCity(country.id, stateId, cityId)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryList;