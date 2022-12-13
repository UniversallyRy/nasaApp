"use client";

import { useState, useEffect } from "react";
import NextLink from "next/link";
import useSWR from "swr";
import axios from "axios";
import EpicList from "../../components/Epic/EpicList";
import ChangeDate from "../../components/ChangeDate";
import { fetchedUrl } from "../../utils/getData";

// todos: add datepicker and default to closest date
export default function EpicPage() {
  const { data, error } = useSWR("/api/epic", axios);
  const [initData, setData] = useState(undefined);
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    axios(fetchedUrl("epic", date)).then((res: any) => {
      setData(res.data);
    });
    setStartDate(date);
  };

  useEffect(() => {
    async function watcher() {
      if (initData == undefined) {
        const result = await data;
        setData(result);
      } else {
        return null;
      }
    }
    return () => {
      watcher();
    };
  }, [data, initData]);

  if (error) return <div>failed to load</div>;
  if (initData == undefined) return <div> . . .Loading</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      <title>Earth Polychromatic Imaging Camera</title>
      <meta
        property="og:pic"
        content="Earth Polychromatic Imaging Camera Images"
        key="epicmeta"
      />
      <ChangeDate selected={startDate} onChange={handleDateChange} />
      <div className="flex flex-col items-center">
        <div className="m-20 sm:m-10 lg:m-2 bg-gray-600 shadow-sm px-3 py-4 rounded-sm focus:outline-none hover:border-gray-700 hover:shadow-xl">
          <NextLink className="font-semibold" passHref href="/" legacyBehavior>
            Back to Home
          </NextLink>
        </div>
        <EpicList data={initData.data} />
      </div>
    </div>
  );
}
