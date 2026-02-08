# Mini Property App – Frontend

This is the frontend of the **Mini Property App**, built using **React.js with Vite**.
The application provides user authentication screens and property management UI,
and communicates with a Spring Boot backend using Axios.

---

## Tech Stack
- React.js
- Vite
- React Router DOM
- Axios
- CSS Modules
- JavaScript (ES6)

---

## Features
- User Login & Signup UI
- Property List view
- Property Detail view
- Add Property form
- Reusable Property Card component
- Purple & White theme
- API integration using Axios
- Client-side routing with React Router

---

## Project Structure
```text
src/
 ├── components/
 │    └── PropertyCard.jsx
 ├── pages/
 │    ├── Login.jsx
 │    ├── Signup.jsx
 │    ├── PropertyList.jsx
 │    ├── PropertyDetail.jsx
 │    └── AddProperty.jsx
 ├── services/
 │    └── api.js
 ├── data/
 │    └── dummyProperties.js
 ├── App.jsx
 ├── App.css
 └── main.jsx
