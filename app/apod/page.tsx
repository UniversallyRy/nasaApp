'use client'

//import { NextPage, GetStaticProps } from "next";
import { useState, useEffect, SetStateAction, useReducer } from "react";
import axios from "axios";
import MotionHeading from "../../components/APOD/Heading";
import MotionTitle from "../../components/APOD/Title";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";
import { APODDataType } from "../../utils/types";
import useSWR from "swr";
import { apodReducer, apodState } from "../../utils/reducers";

export default function APOD() {
  const [state, dispatch] = useReducer(apodReducer, apodState);
  let { data, error } = useSWR('/api/apod', axios)
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    async function init() {
      dispatch({
        type: "FETCH_SUCCESS",
        payload: await data
      })
    }

    return () => {
      init();
    }
  }, [])

  if (state.date != '') {
    let splitDate = state.date.split("-");
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
  if (state.data != undefined) {
    return (
      <div className="flex flex-col h-full w-full items-center p-4">
        <MotionHeading
          title={state.data.title}
          setData={state}
          startDate={startDate}
          setStartDate={setStartDate}
        />
        <MotionTitle title={state.data.title} />
        <MotionContent newData={state.data} />
        <MotionFooter copyright={state.data.copyright} />
      </div>
    );
  }

};
