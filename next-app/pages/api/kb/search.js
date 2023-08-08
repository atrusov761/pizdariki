import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { query, size } = req.body;

    try {
      const response = await axios.post('https://api.yait.io/v1/kb/search', { query, size });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}