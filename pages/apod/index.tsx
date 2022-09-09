import NextLink from "next/link";
import Head from "next/head";
import { GetStaticProps, NextPage } from 'next';
import { VStack, Link, Heading, HeadingProps } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { motion, useDomEvent } from "framer-motion";
import ChangeDate from "../../components/ChangeDate";
import { fetchedData } from "../../utils/getData";
import { TypeAPOD } from "../../utils/types";
import { apodVariant } from "../../utils/variants";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";
declare var global: Global;

const MotionHeading = motion<HeadingProps>(Heading);

const APOD: NextPage<{ apodData: TypeAPOD }> = ({ apodData }) => {
  const [newData, setData] = useState(apodData);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setOpen] = useState(false);


  useEffect(() => {
    if (apodData.date !== undefined) {
      let splitDate = apodData.date.split('-');
      let [year, month, day] = splitDate;
      let newDate = new Date();
      day = day.replace(/^0+/, '');
      if (parseInt(day, 0) !== newDate.getDate() ||
        parseInt(month, 0) !== newDate.getMonth() ||
        parseInt(year, 0) !== newDate.getFullYear()) {
        return setStartDate(newDate);
      }
    }
  }, [apodData]);

  const hideImage = () => {
    return isOpen && setOpen(false);
  };

  useDomEvent(useRef(global.window as any), "scroll", () => hideImage());
  useDomEvent(useRef(global.window as any), "keydown", (e: any) => e.keyCode === 27 && hideImage());

  if (!apodData) return <div>Loading...</div>;

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    const data = await fetchedData("apod", date);
    setStartDate(date);
    setData(data);
  };

  return (
    <VStack minH="100vh" minW="fill">
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
      <MotionHeading
        variants={apodVariant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
      >
        {newData.title}
      </MotionHeading>
      <MotionContent
        newData={newData}
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <MotionFooter picMeta={newData} />
    </VStack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apodData = await fetchedData('apod');

  if (!apodData) {
    return {
      notFound: true,
    }
  };

  return {
    props: {
      apodData,
    },
  };
};

export default APOD;

export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
}
