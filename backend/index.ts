const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/weather', async (req: any, res: any) => {
  try {
    const { lat, lon } = req.query;

    if (typeof lat !== 'string' || typeof lon !== 'string') {
      throw new Error('Latitude and longitude are required as query parameters');
    }
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        lat,
        lon,
        appid: process.env.OPENWEATHERMAP_API_KEY, // API key
        units:'metric'
      },
    });

    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});