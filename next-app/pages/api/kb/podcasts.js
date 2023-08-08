import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await axios.get('https://api.yait.io/v1/kb/podcasts');
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving podcasts' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}