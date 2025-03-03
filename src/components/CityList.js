import React from 'react';
import { PlusCircle,Edit, Trash2 } from 'lucide-react';

const CityList = ({
  cities,
  onAddCity,
  onUpdateCity,
  onDeleteCity
}) => {
  const handleAddCity = () => {
    const name = prompt('Enter city name:');
    if (name && name.trim()) {
      onAddCity(name.trim());
    }
  };

  const handleDeleteCity = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      onDeleteCity(id);
    }
  };

 const handleUpdateCity = (city) => {
        const newName = prompt('Enter new city name:', city.name);
        if (newName && newName.trim() && newName !== city.name) {
          if (window.confirm(`Are you sure you want to update ${city.name} to ${newName}?`)) {
            onUpdateCity(city.id, newName.trim());
          }
        }
      };

  return (
    <div>
      <div className="section-header">
        <h6 className="text-sm font-medium">Cities</h6>
        <button
          onClick={handleAddCity}
          className="btn btn-tertiary"
        >
          <PlusCircle size={14} />
          Add City
        </button>
      </div>

      {cities.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-text">No cities added yet. Click the button above to add your first city.</p>
        </div>
      ) : (
        <ul className="city-list">
          {cities.map(city => (
            <li key={city.id} className="city-item">
              <span className="city-name">{city.name}</span>
              <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateCity(city.id, city.name)}
                    className="btn-icon btn-edit"
                    title="Edit Country"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteCity(city.id, city.name)}
                    className="btn-icon btn-delete"
                    title="Delete City"
                  >
                    <Trash2 size={18} />
                  </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CityList;