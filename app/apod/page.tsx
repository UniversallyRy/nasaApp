'use client'

//import { NextPage, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import MotionHeading from "../../components/APOD/Heading";
import MotionTitle from "../../components/APOD/Title";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";

export default function APOD() {
  let { data, error } = useSWR('/api/apod', axios)
  const [fetchedData, setData] = useState(undefined)
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    async function init() {
      if (fetchedData == undefined) {
        const result = await data;
        setData(result);
      } else {
        return null;
      }
    }
    init()
  }, [fetchedData, data])

  if (data == undefined) return <div> . . .Loading</div>
  if (error) return <div>failed to load</div>
  if (fetchedData?.data != undefined) {

    return (
      <div className="flex flex-col h-full w-full items-center p-4">
        <MotionHeading
          title={fetchedData.data.title}
          setData={setData}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <MotionTitle title={fetchedData.data.title} />
        <MotionContent data={fetchedData.data} />
        <MotionFooter copyright={fetchedData.data.copyright} />
      </div>
    );
  }
}
