# 🌎 Distributed Weather Dashboard

This is a simple distributed weather dashboard that shows the current weather for multiple major cities using data from [WeatherAPI.com](https://www.weatherapi.com/).

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **API**: WeatherAPI.com

## 🚀 Features

- Displays city name, weather icon, description, and temperature.
- Responsive card layout (wraps horizontally).
- Uses a single backend endpoint to fetch all weather data.

## 🔧 How to Run

### 1. Clone the repo
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```
### 2. Install backend dependencies
```bash
Copy
Edit
npm install
```
### 3. Start the backend server
```bash
Copy
Edit
node index.js
Backend runs at: http://localhost:5000
```
### 4. Open the frontend
Simply open index.html in your browser.
Make sure your browser allows CORS for local development or run with a local server like VSCode Live Server. 

## 🌤️ WeatherAPI Setup
Sign up at WeatherAPI.com.

Copy your API key.

Replace the key in index.js:

js
Copy
Edit
const apiKey = 'YOUR_API_KEY_HERE';
## 📂 Project Structure
```bash
Copy
Edit
.
├── index.html          # Frontend page
├── style.css           # Styling
├── index.js            # Node.js backend
├── package.json        # Node.js config
└── README.md           # This file
```
