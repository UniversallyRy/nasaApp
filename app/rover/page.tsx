"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import RoverHeading from "../../components/Rovers/RoverHeading";
import RoverContent from "../../components/Rovers/";
import useSWRImmutable from "swr/immutable";

//todos: expansion on components/pages?, rover camera choices, style fixes
export default function Rover() {
  let { data, error } = useSWRImmutable("/api/rover", axios);
  const [newData, setData] = useState(data);
  console.log(data);
  useEffect(() => {
    async function init() {
      if (newData == undefined) {
        const result = await data;
        setData(result);
      } else {
        return null;
      }
    }
    init();
  }, [newData, data]);

  if (!data) return <div>Loading...</div>;
  if (data == undefined) return <div> . . .Loading</div>;
  if (error) return <div>failed to load</div>;

  return (
    <div className="container mb-4">
      <div className="flex flex-col">
        <RoverHeading setData={setData} />
        <RoverContent data={newData.photos} />
      </div>
    </div>
  );
}

// last date with decent sized return json + avoiding empty dates
// const data = await fetchedUrl("rover", new Date(2021, 6, 17));
