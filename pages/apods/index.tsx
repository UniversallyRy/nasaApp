import NextLink from "next/link";
import Head from "next/head";
import { apiKey } from '../../key';
import { GetStaticProps, NextPage } from 'next';
import { Box, BoxProps, Image, ImageProps, chakra, VStack, Stack, Text, Link, Heading, HeadingProps } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { motion, useDomEvent, useAnimation } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/apodpage.module.sass';

interface Data {
  url: string;
  title: string;
  explanation: string;
  date: number;
}

const MotionHeading = motion<HeadingProps>(Heading);
const MotionImage = motion<ImageProps>(Image);
const MotionDiv = motion<BoxProps>(Box);
const variants = {
  open: {
    y: 0,
    opacity: 0.2,
    transition: {
      y: { stiffness: 1000, velocity: -1000}
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const fetchedData = (date = new Date()):string => {
  let day, month, year, newDay, newMonth;
  let thisDate = date;
  [year, month, day] = [thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDate()];
  newDay = day.toString().padStart(2, '0');
  newMonth = month.toString().padStart(2, '0');
  let newDate = [year, newMonth, newDay].join('-');
  let url = `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=` + `${apiKey}`;
  return url;
}

const APOD: NextPage<{ data: Data }> = ({ data }:any) => {
  const [newData, setData]  = useState(data);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setOpen] = useState(false);
  const imgAnimation = useAnimation();

  const handleMouseMove = (e:any) => {
    const { clientX, clientY } = e;
    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 15;
    
    imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    });

  }

  useEffect(() => {
    let splitDate = data.date.split('-');
    let [year, month, day] = splitDate;
    let newDate = new Date();
    day = day.replace(/^0+/, '');
    if(day != newDate.getDate() || 
      month != newDate.getMonth() || 
      year != newDate.getFullYear()) 
      {
        return setStartDate(newDate);
      }
    }, [data.date]);

  const hideImage = () => {
    return isOpen && setOpen(false);
  };

  if(typeof window === 'undefined') {
      global.window = {}
  };
  
  useDomEvent(useRef(window as any), "scroll", () => hideImage());
  useDomEvent(
    useRef(window as any),
    "keydown",
    (e: any) => e.keyCode === 27 && hideImage()
  );
  
  if (!data) return <div>Loading...</div>;
  const handleDateChange = async (date:Date) => {
    if (new Date() < date) return ;
    const url = fetchedData(date);
    const res = await fetch(url);
    const data = await res.json();
    setStartDate(date);
    setData(data);
  }

  return (
    <VStack w="full" minH="100vh">
      <Head key="pages/apod key">
        <title>{ newData.title }</title>
        <meta property="og:pic" content="Astronomy Picture of the Day" key={newData.title} />
      </Head>
      <Box style={{margin: 10, color: 'black'}}>
        <DatePicker  withPortal selected={startDate}onChange={handleDateChange} />
      </Box>
      <NextLink href="/">
        <Link>
          <chakra.a>← Back to home</chakra.a>
        </Link>
      </NextLink>
      <MotionHeading
        mx={2}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.3 }}
      >
        { newData.title }
      </MotionHeading>
      <Stack spacing="28px" direction={["column", "column", "row"]}>
        <Box
          className={`${styles["image-container"]} ${isOpen ? styles.open : ""}`}
        >
          <MotionDiv
            animate={{ opacity: isOpen ? 1 : 0 }}
            className={styles.shade}
            onClick={() => setOpen(false)}
          />
          <MotionImage
            animate={imgAnimation}
            src={newData.hdurl}
            onMouseMove={e => handleMouseMove(e)}
            onClick={() => setOpen(!isOpen)}
            alt={'Picture for the date of ' + `${newData.date}`}
          />
          <Box
            zIndex={-1}
            top={0}
            left={0}
            height={'100%'}
            width={'100%'}
            bg='gray.500'
            position='absolute'
          />
        </Box>
        <Text
          alignSelf='center' 
          fontSize={{ base: "11px", md: "12px", lg: "13px", xl: "13px"}}
          lineHeight={1.6}
          letterSpacing={0.4}
          maxW={340}
          wordBreak='break-word'
          overflowWrap='anywhere'
          hyphens='auto'
        >
          { newData.explanation }
        </Text>
      </Stack>
      <Stack alignItems='center' >
        <Text
          fontSize={{ base: "12px", md: "18px", lg: "26px", xl: "30px"}}
          align={'center'}>
          Posted on 
            <time> {newData.date} </time>
        </Text>
        {!newData.copyright == undefined 
        ?<Text fontSize={{ base: "6px", md: "8px", lg: "12px", xl: "14px"}}>
            Copyright: {newData.copyright}
        </Text>
        : null
        }
      </Stack>
    </VStack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(fetchedData());
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  };

  return {
    props: {
      data,
    },
  };
};

export default APOD;