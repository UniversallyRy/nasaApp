import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { fetchedUrl } from "../../utils/getData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    const URL = fetchedUrl("rover", new Date(2021, 6, 17));
    //  const URL = fetchedUrl("epic", new Date("11/16/22"));
    const data = await axios(URL).then((response) => {
      return response.data;
    });

    if (data.status == 400) {
      res.statusCode = 400;
      res.status(405).end();
    } else {
      res.statusCode = 200;
      res.status(200).json(data);
    }
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
