# TORQUE — Car Rental Platform

A modern, responsive car rental frontend built with React and Vite. TORQUE uses a bold orange-and-black visual identity, editorial typography, cinematic car photography, and a clean booking flow.

## Features

- Responsive landing page with hero, navigation, stats, featured fleet, brand story, contact form, and footer
- Search cars by name
- Filter by brand, fuel type, transmission, and maximum daily price
- Car details modal with specifications and features
- Booking form with name, pickup date, return date, location, and contact number
- Frontend contact form with validation
- Interactive toast feedback for demo submissions
- Responsive mobile navigation and layout
- Hover effects, transitions, and reduced-motion support
- No backend or database required

## Tech stack

- React
- Vite
- Lucide React
- CSS

## Run locally

Install Node.js, then open this project folder in your terminal.

```zsh
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```zsh
npm run build
npm run preview
```

## Project structure

```text
torque-car-rental/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

## Important note

This is a frontend-only demonstration. Booking and contact forms validate input and show confirmation messages in the browser, but they do not send data, create real reservations, or process payments. Car photography loads from Unsplash and Google Fonts are loaded from Google Fonts, so those assets require an internet connection.

## Customization

- Edit the `cars` array in `src/main.jsx` to change vehicles, prices, specs, features, and image URLs.
- Update the orange accent through `--orange` in `src/styles.css`.
- Update the business name, locations, copy, and footer links in `src/main.jsx`.
