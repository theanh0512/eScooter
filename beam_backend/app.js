import express from 'express';
import scooters from './db/scooters';
import trips from './db/trips';

const app = express();

app.get('/api/v1/scooters', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'scooters retrieved successfully',
    scooters: scooters
  })
});

app.get('/api/v1/trips', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'trips retrieved successfully',
    trips: trips
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

