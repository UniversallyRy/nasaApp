import Head from "next/head";
import { Dispatch, SetStateAction } from "react";
import ChangeDate from "../ChangeDate";
import { fetchedData } from "../../utils/getData";
import { TypeAPOD } from "../../utils/types";
import { Flex } from "@chakra-ui/react";

type Props = {
  title: string;
  setData: Dispatch<SetStateAction<TypeAPOD>>;
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
