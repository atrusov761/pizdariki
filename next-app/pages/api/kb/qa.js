import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { query } = req.body;

    try {
      const response = await axios.post('https://api.yait.io/v1/kb/qa', { query });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching data from API' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}