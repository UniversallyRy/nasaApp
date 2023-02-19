import { Dispatch, SetStateAction, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { fetchedUrl } from "../../utils/getData";
import DatePicker from "../ChangeDate";
import { RoverDataType } from "../../utils/types";

type Props = {
  setData: Dispatch<SetStateAction<RoverDataType>>;
};

export default function RoverHeading({ ...props }: Props) {
  const [date, setDate] = useState(new Date(2021, 6, 17));

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    let newData = await fetchedUrl("rover", date);
    setDate(date);
    props.setData(newData);
  };

  return (
    <div className="self-center mb-2">
      <Head key="pages/rover key">
        <title>Mars Rover Photos</title>
        <meta property="og:rover" content="Mars Rover Photos" key="rovers" />
      </Head>
      <DatePicker selected={date} onChange={handleDateChange} />
      <div className="bg-gray-300 px-5 py-3 font-semibold rounded-sm hover:bg-gray-400">
        <NextLink passHref href="/" legacyBehavior>
          Back to Home
        </NextLink>
      </div>
    </div>
  );
}
