import React from 'react';
import CityList from './CityList.js';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';

const StateList = ({
  states,
  onAddState,
  onUpdateState,
  onDeleteState,
  onAddCity,
  onUpdateCity,
  onDeleteCity
}) => {
  const handleAddState = () => {
    const name = prompt('Enter state name:');
    if (name && name.trim()) {
      onAddState(name.trim());
    }
  };

  const handleUpdateState = (id, currentName) => {
    const name = prompt('Enter new state name:', currentName);
    if (name && name.trim() && name !== currentName) {
      if (window.confirm(`Are you sure you want to update ${currentName} to ${name}?`)) {
        onUpdateState(id, name.trim());
      }
    }
  };

  const handleDeleteState = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name} and all its cities?`)) {
      onDeleteState(id);
    }
  };

  return (
    <div>
      <div className="section-header">
        <h4 className="text-lg font-medium">States</h4>
        <button
          onClick={handleAddState}
          className="btn btn-secondary"
        >
          <PlusCircle size={16} />
          Add State
        </button>
      </div>

      {states.length === 0 ? (
        <div className="empty-state">
          <p className="empty-state-text">No states added yet. Click the button above to add your first state.</p>
        </div>
      ) : (
        <div>
          {states.map(state => (
            <div key={state.id} className="state-card">
              <div className="state-header">
                <h5 className="state-name">{state.name}</h5>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleUpdateState(state.id, state.name)}
                    className="btn-icon btn-edit"
                    title="Edit State"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    onClick={() => handleDeleteState(state.id, state.name)}
                    className="btn-icon btn-delete"
                    title="Delete State"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <div className="state-content">
                <CityList
                  stateId={state.id}
                  cities={state.cities}
                  onAddCity={(name) => onAddCity(state.id, name)}
                  onUpdateCity={(cityId, name) => onUpdateCity(state.id, cityId, name)}
                  onDeleteCity={(cityId) => onDeleteCity(state.id, cityId)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StateList;