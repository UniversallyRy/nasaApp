import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { fetchedUrl } from "../../utils/getData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    const URL = fetchedUrl("landsat");
    const data = await axios(URL).then((response) => {
      return response.data;
    });

    res.status(200).json(data);
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
