import Head from "next/head";
import NextLink from "next/link";
import { Dispatch, SetStateAction } from "react";
import { Heading, HeadingProps, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ChangeDate from "../ChangeDate";
import { fetchedData } from "../../utils/getData";
import { apodVariant } from "../../utils/variants";
import { TypeAPOD } from "../../utils/types";

type Props = {
  newData: TypeAPOD
  setData: Dispatch<SetStateAction<TypeAPOD>>
  startDate: Date | undefined
  setStartDate: Dispatch<SetStateAction<Date>>
}

const MotionHeading = ({ newData, setData, startDate, setStartDate }: Props) => {

  const MotionHead = motion<HeadingProps>(Heading);

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    const data = await fetchedData("apod", date);
    setStartDate(date);
    setData(data);
  };

  return (
    <>
      <Head key="pages/apod key">
        <title>{newData.title}</title>
        <meta
          property="og:pic"
          content="Astronomy Picture of the Day"
          key={newData.title}
        />
      </Head>
      <ChangeDate
        selected={startDate}
        onChange={handleDateChange}
      />
      <NextLink href="/">
        <Link>
          ← Back to home
        </Link>
      </NextLink>
      <MotionHead
        variants={apodVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
      >
        {newData.title}
      </MotionHead>
    </>
  )
}

export default MotionHeading;
