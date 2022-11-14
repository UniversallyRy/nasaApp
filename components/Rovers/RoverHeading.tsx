import { Dispatch, SetStateAction, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { fetchedData } from "../../utils/getData";
import DatePicker from "../ChangeDate";
import { RoverDataType } from "../../utils/types";

type Props = {
  setData: Dispatch<SetStateAction<RoverDataType>>;
};

const RoverHeading = ({ ...props }: Props) => {
  const [date, setDate] = useState(new Date(2021, 6, 17));

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    let newData = await fetchedData("rover", date);
    setDate(date);
    props.setData(newData);
  };

  return <>
    <Head key="pages/rover key">
      <title>Mars Rover Photos</title>
      <meta property="og:rover" content="Mars Rover Photos" key="rovers" />
    </Head>
    <DatePicker selected={date} onChange={handleDateChange} />
    <NextLink passHref href="/" legacyBehavior>
      <Link
        bg="gray.900"
        color="gray.100"
        px={5}
        py={3}
        fontWeight="semibold"
        rounded="sm"
        _hover={{ bg: "gray.400" }}
      >
        Back to Home
      </Link>
    </NextLink>
  </>;
};

export default RoverHeading;
