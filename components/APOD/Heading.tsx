import Head from "next/head";
import { Dispatch, SetStateAction } from "react";
import { Flex } from "@chakra-ui/react";
import ChangeDate from "../ChangeDate";
import { APODDataType } from "../../utils/types";
import { fetchedData } from "../../utils/getData";

type Props = {
  title: string;
  setData: Dispatch<SetStateAction<APODDataType>>;
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date>>;
};

const MotionHeading = ({ ...props }: Props) => {
  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    const data = await fetchedData("apod", date);
    props.setStartDate(date);
    props.setData(data);
  };

  return (
    <Flex>
      <Head key="pages/apod key">
        <title>{props.title}</title>
        <meta
          property="og:pic"
          content="Astronomy Picture of the Day"
          key={props.title + "_headingKey"}
        />
      </Head>
      <ChangeDate selected={props.startDate} onChange={handleDateChange} />
    </Flex>
  );
};

export default MotionHeading;
