'use client'

//import { NextPage, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import axios from "axios";
import MotionHeading from "../../components/APOD/Heading";
import MotionTitle from "../../components/APOD/Title";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";
import { APODDataType } from "../../utils/types";
import useSWR from "swr";

export default function APOD() {
  let { data, error } = useSWR('/api/apod', axios)
  const [fetchedData, setData] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    async function init() {
      if (fetchedData?.data == undefined) {
        let test = await data;
        setData(test);
      } else {
        return null;
      }
    }
    init()
  })

  if (fetchedData != undefined && fetchedData.date != undefined) {
    let splitDate = fetchedData.date.split("-");
    let [year, month, day] = splitDate;
    let newDate = new Date();
    day = day.replace(/^0+/, "");
    if (
      parseInt(day, 0) !== newDate.getDate() ||
      parseInt(month, 0) !== newDate.getMonth() ||
      parseInt(year, 0) !== newDate.getFullYear()
    ) {
      return setStartDate(newDate);
    }
  }

  if (data == undefined) return <div> . . .Loading</div>
  if (error) return <div>failed to load</div>
  if (fetchedData?.data != undefined) {
    return (
      <div className="flex flex-col h-full w-full items-center">
        <MotionHeading
          title={fetchedData.data.title}
          setData={setData}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <MotionTitle title={fetchedData.data.title} />
        <MotionContent newData={fetchedData.data} />
        <MotionFooter copyright={fetchedData.data.copyright} />
      </div>
    );
  }

};
