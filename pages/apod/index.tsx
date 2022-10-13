import { NextPage, GetStaticProps } from "next";
import { useState, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import MotionHeading from "../../components/APOD/Heading";
import MotionTitle from "../../components/APOD/Title";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";
import { APODDataType } from "../../utils/types";
import { fetchedData } from "../../utils/getData";

const APOD: NextPage<{ apodData: APODDataType }> = ({ apodData }) => {
  const [newData, setData] = useState(apodData);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (apodData.date !== undefined) {
      let splitDate = apodData.date.split("-");
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
  }, [apodData]);

  if (!apodData) return <div>Loading...</div>;

  return (
    <VStack minH="100%">
      <MotionHeading
        title={newData.title}
        setData={setData}
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <MotionTitle title={newData.title} />
      <MotionContent newData={newData} />
      <MotionFooter copyright={newData.copyright} />
    </VStack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apodData = await fetchedData("apod");

  if (!apodData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      apodData,
    },
  };
};

export default APOD;
