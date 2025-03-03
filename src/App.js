import React, { useState } from 'react';
import CountryList from './components/CountryList';
import './styles.css';

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = (name) => {
    const newCountry = {
      id: Date.now(),
      name,
      states: []
    };
    setCountries([...countries, newCountry]);
  };

  const updateCountry = (id, name) => {
    setCountries(
      countries.map(country => 
        country.id === id ? { ...country, name } : country
      )
    );
  };

  const deleteCountry = (id) => {
    setCountries(countries.filter(country => country.id !== id));
  };

  const addState = (countryId, name) => {
    setCountries(
      countries.map(country => {
        if (country.id === countryId) {
          return {
            ...country,
            states: [
              ...country.states,
              {
                id: Date.now(),
                name,
                cities: []
              }
            ]
          };
        }
        return country;
      })
    );
  };

  const updateState = (countryId, stateId, name) => {
    setCountries(
      countries.map(country => {
        if (country.id === countryId) {
          return {
            ...country,
            states: country.states.map(state => 
              state.id === stateId ? { ...state, name } : state
            )
          };
        }
        return country;
      })
    );
  };

  const deleteState = (countryId, stateId) => {
    setCountries(
      countries.map(country => {
        if (country.id === countryId) {
          return {
            ...country,
            states: country.states.filter(state => state.id !== stateId)
          };
        }
        return country;
      })
    );
  };

  const addCity = (countryId, stateId, name) => {
    setCountries(
      countries.map(country => {
        if (country.id === countryId) {
          return {
            ...country,
            states: country.states.map(state => {
              if (state.id === stateId) {
                return {
                  ...state,
                  cities: [
                    ...state.cities,
                    {
                      id: Date.now(),
                      name
                    }
                  ]
                };
              }
              return state;
            })
          };
        }
        return country;
      })
    );
  };

  const deleteCity = (countryId, stateId, cityId) => {
    setCountries(
      countries.map(country => {
        if (country.id === countryId) {
          return {
            ...country,
            states: country.states.map(state => {
              if (state.id === stateId) {
                return {
                  ...state,
                  cities: state.cities.filter(city => city.id !== cityId)
                };
              }
              return state;
            })
          };
        }
        return country;
      })
    );
  };

  return (
    <div className="app-container">
      <div className="app-content">
        <h1 className="app-title">Country, State, and City Management</h1>
        <CountryList 
          countries={countries}
          onAddCountry={addCountry}
          onUpdateCountry={updateCountry}
          onDeleteCountry={deleteCountry}
          onAddState={addState}
          onUpdateState={updateState}
          onDeleteState={deleteState}
          onAddCity={addCity}
          onDeleteCity={deleteCity}
        />
      </div>
    </div>
  );
}

export default App;