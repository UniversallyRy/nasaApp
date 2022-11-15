'use client'

import { NextPage, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import MotionHeading from "../../components/APOD/Heading";
import MotionTitle from "../../components/APOD/Title";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";
import { fetchedData } from "../../utils/getData";

async function getInit() {
  const apodData = await fetchedData("apod")
  if (!apodData) {
    throw new Error('Failed to fetch data');
  }
  return apodData;
}

export default function APOD() {
  const [data, setData] = useState({});
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    getInit().then((a) => {
      setData(a)
    });
  }, [])

  if (data.date !== undefined) {
    let splitDate = data.date.split("-");
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

  return (
    <div className="flex flex-col h-full w-full items-center">
      <MotionHeading
        title={data.title}
        setData={setData}
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <MotionTitle title={data.title} />
      <MotionContent newData={data} />
      <MotionFooter copyright={data.copyright} />
    </div>
  );
};
