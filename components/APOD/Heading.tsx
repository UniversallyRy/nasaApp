import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import ChangeDate from "../ChangeDate";
import { APODDataType } from "../../utils/types";
import { fetchedUrl } from "../../utils/getData";
import { fetcher } from "../../utils/fetcher";
import axios from "axios";

type Props = {
  title: string;
  setData: Dispatch<SetStateAction<APODDataType>>;
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date>>;
};

export default function Heading({ ...props }: Props) {
  const { setData, setStartDate, title, startDate } = props;

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    const data = await fetcher(fetchedUrl("apod", date));
    setData({ data });
    setStartDate(date);
    if (!data) {
      throw new Error('Failed to fetch data');
    }
  };

  return (
    <div className="self-center">
      <Head key="pages/apod key">
        <title>{title}</title>
        <meta
          property="og:pic"
          content="Astronomy Picture of the Day"
          key={title + "_headingKey"}
        />
      </Head>
      <ChangeDate selected={startDate} onChange={handleDateChange} />
    </div>
  );
};
