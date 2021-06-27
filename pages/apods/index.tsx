import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from 'react'
import { apiKey } from '../../key'
import { GetStaticProps, NextPage } from 'next';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from "react-datepicker";
import ApodList from '../../components/ApodList'
import "react-datepicker/dist/react-datepicker.css";
import styles from '../../styles/apodpage.module.sass'

interface Data {
  title: string;
  date: number;
  explanation: string;
  url: string;
}

const variants = {
  open: {
    y: 0,
    opacity: 0.2,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
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

const url = 'https://api.nasa.gov/planetary/apod?date=2021-06-01&api_key=' + `${apiKey}`
const listUrl = 'https://api.nasa.gov/planetary/apod?count=10&api_key=' + `${apiKey}`

const APOD: NextPage<{ data: Data }> = ({ data, resData }:any) => {
    const [newData, setData]  = useState(data);
    const [startDate, setStartDate] = useState(new Date());
    if (!data) return <div>Loading...</div>
    const handleDateChange = async (date:Date) => {
        if (new Date() < date) return 
        setStartDate(date)
        let day, month, year, newDay, newMonth;
        [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
        newDay = day.toString().padStart(2, '0');
        newMonth = month.toString().padStart(2, '0');
        let newDate = [year, newMonth, newDay].join('-');
        let changedUrl = `https://api.nasa.gov/planetary/apod?date=${newDate}&api_key=` + `${apiKey}`;
        const res = await fetch(changedUrl);
        const data = await res.json();
        setData(data);
    }

  return (
    <>
      <Head>
        <title>{ newData.title }</title>
        <meta property="og:pic" content="Astronomy Picture of the Day" key={newData.title} />
      </Head>
      {/* <DatePicker withPortal selected={startDate} dateFormat="yyyy/MM/dd" onChange={handleDateChange} />
      <article className={styles.container}>
        <motion.h1 
          className={styles.title}
          variants={variants}
          whileHover={{ scale: 1.7 }}
          whileTap={{ scale: 1.3 }}
        >
          { newData.title }
        </motion.h1>
        <p className={styles.text}>{ newData.explanation }</p>
        <div className={styles.imageContainer}>
          <button className={styles.buttonStyle}>
            Back
          </button> */}
          <AnimatePresence exitBeforeEnter initial={false}>
            {/* <Image
              className={styles.image}
              src={ newData.url }
              quality={ 100 }
              height={ 800 }
              width={ 1000 }
              layout='intrinsic'
              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              placeholder="blur"
              alt={ newData.title }
            /> */}
                <ApodList resData={resData}/>
            </AnimatePresence>
          {/* <button className={styles.buttonStyle}>
            Next
          </button>
        </div>
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        <footer className={styles.footer}>
          <h1>
            Posted on 
            <time> {newData.date} </time>
          </h1>
        </footer>
      </article> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const resList = await fetch(listUrl);
  const resData = await resList.json();

  return {
    props: {
      data,
      resData
    },
  };
};

export default APOD;