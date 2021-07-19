import NextLink from "next/link";
import Head from "next/head";
import { GetStaticProps, NextPage } from 'next';
import { Box, BoxProps, Image, ImageProps, chakra, VStack, Stack, Text, Link, Heading, HeadingProps, useColorModeValue } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { motion, useDomEvent, useAnimation } from "framer-motion";
import ChangeDate from "../../components/ChangeDate";
import { fetchedData } from "../../utils/endpoints";

export interface Global extends NodeJS.Global {
  document: Document;
  window: Window;
}
declare var global: Global;

interface Data {
  url: string;
  title: string;
  explanation: string;
  date: string;
  copyright: string
  hdurl: string
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

const APOD: NextPage<{ data: Data }> = ({ data }) => {
  const [newData, setData]  = useState(data);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setOpen] = useState(false);
  const backGround = useColorModeValue("rgba(232, 236, 241, 0.8)", "rgba(0, 0, 0, 0.95)");

  
  const imgAnimation = useAnimation();

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
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
    if(parseInt(day) != newDate.getDate() || 
      parseInt(month) != newDate.getMonth() || 
      parseInt(year) != newDate.getFullYear()) 
      {
        return setStartDate(newDate);
      }
    }, [data.date]);

  const hideImage = () => {
    return isOpen && setOpen(false);
  };
 
  useDomEvent(useRef(global.window as any), "scroll", () => hideImage());
  useDomEvent(useRef(global.window as any), "keydown",(e: any) => e.keyCode === 27 && hideImage());
  
  if (!data) return <div>Loading...</div>;
  
  const handleDateChange = async (date:Date) => {
    if (new Date() < date) return ;
    const data = await fetchedData("apod", date);
    setStartDate(date);
    setData(data);
  }

  return (
    <VStack minH="100vh" minW="fill">
      <Head key="pages/apod key">
        <title>{ newData.title }</title>
        <meta property="og:pic" content="Astronomy Picture of the Day" key={newData.title} />
      </Head>
      <ChangeDate 
        selected={startDate} 
        onChange={handleDateChange} 
      />
      <NextLink href="/">
        <Link>
          <chakra.a>← Back to home</chakra.a>
        </Link>
      </NextLink>
      <MotionHeading
        pl={12}
        variants={variants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.2 }}
      >
        { newData.title }
      </MotionHeading>
      <Stack align="center" spacing={10} direction={{base:"column", md:"row"}}>
        <Box
          w={["xs", "sm", "lg", "xl"]}
          cursor={isOpen ? "zoom-out" : "zoom-in"}
        >
          <MotionDiv
            pos="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            pointerEvents={isOpen ? "auto" :"none"}
            opacity={isOpen ? 1 : 0}
            bg={backGround}
            animate={{ opacity: isOpen ? 1 : 0 }}
            onClick={() => setOpen(false)}
          />
          <MotionImage
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={isOpen ? "docked" : "auto"}
            h={isOpen ? "auto" : "full"}
            w={isOpen ? "auto" : "full"}
            m={isOpen ? "auto" : "1"}
            maxH={isOpen ? "full" : "auto"}
            maxW={isOpen ? "full" : "auto"}
            pos={isOpen ? "absolute" : "relative"}
            objectFit="cover"
            objectPosition="center"
            animate={imgAnimation}
            src={newData.hdurl}
            onMouseMove={e => handleMouseMove(e)}
            onClick={() => setOpen(!isOpen)}
            alt={'Picture for the date of ' + `${newData.date}`}
          />
        </Box>
        <Text
          fontSize={{ base: "11px", sm: "12px", lg: "13px"}}
          lineHeight={["short","tall"]}
          letterSpacing="wider"
          maxW="xs"
          wordBreak='break-word'
          overflowWrap='anywhere'
          hyphens='auto'
        >
          { newData.explanation }
        </Text>
      </Stack>
      <Stack>
        <Text
          fontSize={{ base: "14px", sm: "20px", lg: "28px"}}
        >
          Posted on 
            <time> {newData.date} </time>
        </Text>
        {!newData.copyright == undefined 
        ?<Text fontSize={{ base: "6px", lg: "12px"}}>
            Copyright: {newData.copyright}
        </Text>
        : null
        }
      </Stack>
    </VStack>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchedData('apod');

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