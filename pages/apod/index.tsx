import { GetStaticProps, NextPage } from "next";
import { useState, useRef, useEffect } from "react";
import { VStack } from "@chakra-ui/react";
import { useDomEvent } from "framer-motion";
import MotionHeading from "../../components/APOD/Heading";
import MotionContent from "../../components/APOD/Content";
import MotionFooter from "../../components/APOD/Footer";
import { fetchedData } from "../../utils/getData";
import { TypeAPOD } from "../../utils/types";

declare var global: Global;

const APOD: NextPage<{ apodData: TypeAPOD }> = ({ apodData }) => {
  const [newData, setData] = useState(apodData);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setOpen] = useState(false);

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

  const hideImage = () => {
    return isOpen && setOpen(false);
  };

  useDomEvent(useRef(global.window as any), "scroll", () => hideImage());
  useDomEvent(
    useRef(global.window as any),
    "keydown",
    (e: any) => e.keyCode === 27 && hideImage()
  );

  if (!apodData) return <div>Loading...</div>;

  return (
    <VStack minH="100%">
      <MotionHeading
        newData={newData}
        setData={setData}
        startDate={startDate}
        setStartDate={setStartDate}
      />
      <MotionContent newData={newData} isOpen={isOpen} setOpen={setOpen} />
      <MotionFooter picMeta={newData} />
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

export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
}
