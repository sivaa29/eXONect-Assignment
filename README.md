# Country, State, and City Management System

## Overview
This project is a simple Country, State, and City Management System built using ReactJS and JavaScript, without any external libraries or npm packages. The application allows users to add, edit, and delete countries, states, and cities in a hierarchical structure.

## Features
### Country Management
- **Add a Country**: Users can add a new country.
- **Edit a Country**: Users can edit an existing country name with a confirmation dialog.
- **Delete a Country**: Users can delete a country, along with all associated states and cities, with a confirmation dialog.

### State Management
- **Add a State**: States can be added to a specific country.
- **Edit a State**: Users can edit an existing state name with a confirmation dialog.
- **Delete a State**: Users can delete a state, along with all associated cities, with a confirmation dialog.

### City Management
- **Add a City**: Cities can be added under a specific state.
- **Delete a City**: Users can delete a city with a confirmation dialog.

## User Interface (UI) Design
### Main Screen
- Button to add a new country.
- List of existing countries with options to:
  - Edit the country name.
  - Delete the country.
  - View and manage states for the country.

### State Management Screen
- Section for each country to:
  - Add a new state.
  - Edit existing states.
  - Delete states (with confirmation).

### City Management Screen
- Section for each state to:
  - Add a new city.
  - Delete existing cities (with confirmation).

## Component Breakdown
### `App.js`
- Manages the state of countries, states, and cities.
- Handles adding, updating, and deleting countries.
- Passes down data and functions to child components.

### `CountryList.js`
- Displays a list of countries.
- Allows adding, editing, and deleting a country.
- Displays a list of states for each country and links to manage them.

### `StateList.js`
- Displays a list of states for a specific country.
- Allows adding, editing, and deleting states.
- Displays a list of cities for each state and links to manage them.

### `CityList.js`
- Displays a list of cities for a specific state.
- Allows adding and deleting cities.

## Business Logic
### Adding New Entities
- Users can add a country, state, or city through a prompt or form-based UI.
- The new entity is stored in the data structure and displayed in the UI.

### Editing Existing Entities
- Users can edit country, state, or city names.
- A confirmation dialog is shown before updating.
- UI updates upon successful edit.

### Deleting Entities
- Users can delete a country, state, or city with confirmation dialogs.
- Deleting a country removes associated states and cities.
- Deleting a state removes associated cities.
- UI updates after deletion.

### Confirmation Alerts
- `window.confirm()` is used before deleting an entity.
- Prompts are used to confirm name edits.

## Technologies Used
- **ReactJS**: For building the UI.
- **JavaScript (ES6)**: For handling state management, event handling, and data operations.

## Development Flow
1. **Set up React App**: Initialize the project using Create React App.
2. **Create Components**: Develop individual components for countries, states, and cities.
3. **State Management**: Use React's `useState` hook to manage the application state.
4. **Data Flow**: Pass data and functions through props.
5. **User Interaction**: Use prompts for adding/editing and confirm dialogs for deletion.

## Testing and Validation
### Functional Testing
- Ensure add, edit, and delete operations work correctly.
- Verify that confirmation dialogs appear and function properly.

### UI Testing
- Confirm that UI updates correctly after add, edit, and delete operations.
- Ensure the hierarchical structure (Country → State → City) is correctly displayed and managed.

## How to Run the Project

1. Install dependencies (if any, though no external libraries are used):
   ```bash
   npm install
   ```
2. Start the application:
   ```bash
   npm start
   ```
5. Open `http://localhost:3000/` in your browser.

## License
This project is licensed under the MIT License.

