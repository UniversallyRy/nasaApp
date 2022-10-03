// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchedData } from '../../utils/getData';

export default async function handler(req, res) {
  try {
    const response = await fetchedData('apod');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    res.end(response);
  }

  catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
