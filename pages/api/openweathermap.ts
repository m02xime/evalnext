import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

// Récupérez votre token sur https://home.openweathermap.org/api_keys
const API_KEY = 'f510a8df0dd90ab272e7239e90be5b03';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { city } = req.query;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lang=fr&q=${city}&appid=${API_KEY}&units=metric`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des données météorologiques.' });
  }
}