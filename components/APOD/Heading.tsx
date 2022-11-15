import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import ChangeDate from "../ChangeDate";
import { APODDataType } from "../../utils/types";
import { fetchedData } from "../../utils/getData";

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
    const data = await fetchedData("apod", date)
      .then(a => {
        setData(a);
        setStartDate(date);
      })
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
