# FullStack Project

![Flask](https://img.shields.io/badge/Flask-1.1.2-blue)
![React](https://img.shields.io/badge/React-17.0.2-blue)
![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-1.3.23-blue)

This project is a learning exercise to link a Flask backend with a React frontend, following TechWithTim's YouTube tutorial.

![Demo GIF](demo.gif)

## Project Structure

- `frontend/`: Contains the React frontend application.

  - `src/`
    - `App.jsx`: Main React component that handles the contact list and forms.
    - `ContactList.jsx`: Component to display the list of contacts.
    - `ContactForm.jsx`: Component to handle the creation and editing of contacts.
    - `css/`: Contains CSS files for styling the application.

- `backend/`: Contains the Flask backend application.
  - `models.py`: Defines the database model for contacts.
  - `main.py`: Contains the Flask routes for handling API requests.

## Backend Setup

1. Install dependencies:

   ```bash
   pip install flask sqlalchemy
   ```

2. Run the Flask application:
   ```bash
   python main.py
   ```

### API Endpoints

- `GET /contacts`: Retrieve all contacts.
- `POST /create_contact`: Create a new contact.
- `PATCH /update_contact/<int:user_id>`: Update an existing contact.
- `DELETE /delete_contact/<int:user_id>`: Delete a contact.

## Frontend Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the React application:
   ```bash
   npm start
   ```

## Usage

- Open the React application in your browser.
- Use the interface to create, update, and delete contacts.
- The frontend communicates with the Flask backend to perform CRUD operations on the contacts.

## Acknowledgements

This project is based on TechWithTim's YouTube tutorial on linking Flask with React.
