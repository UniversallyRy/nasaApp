// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { apiKey } from './../../key';

// type Data = {
//   url: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ url:`https://api.nasa.gov/planetary/apod?api_key=` + `${apiKey}` })
// }