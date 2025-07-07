const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

const apiKey = 'd146fc6c640149e9a4193152250707';
const cities = [
  'New York', 'London', 'Tokyo', 'Paris',
  'Sydney', 'Moscow', 'Rio de Janeiro', 'Cape Town',
  'Toronto', 'Dubai', 'Singapore', 'Berlin',
  'Jakarta'
];

app.get('/api/weather', async (req, res) => {
  try {
    const results = [];

    for (const city of cities) {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
        params: {
          key: apiKey,
          q: city
        }
      });

      const data = response.data;
      results.push({
        city: data.location.name,
        temp: data.current.temp_c,
        description: data.current.condition.text,
        icon: 'https:' + data.current.condition.icon
      });
    }

    res.json(results);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
