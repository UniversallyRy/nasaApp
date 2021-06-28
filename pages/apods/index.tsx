import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { apiKey } from '../../key'
import { GetStaticProps, NextPage } from 'next';
import { useState, useRef } from "react";
import { motion, useDomEvent, useAnimation } from "framer-motion";
import DatePicker from "react-datepicker";
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

const url = 'https://api.nasa.gov/planetary/apod?date=2021-06-01&api_key=' + `${apiKey}`

const APOD: NextPage<{ data: Data }> = ({ data }:any) => {
    const [newData, setData]  = useState(data);
    const [startDate, setStartDate] = useState(new Date());
  
    const [isOpen, setOpen] = useState(false);
    const imgAnimation = useAnimation()

    const handleMouseMove = e => {
      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offsetFactor = 15
      imgAnimation.start({
        x: moveX / offsetFactor,
        y: moveY / offsetFactor
      })
    }

    function hideImage() {
      return isOpen && setOpen(false);
    }
  
    useDomEvent(useRef(window as any), "scroll", () => hideImage());
    useDomEvent(
      useRef(window as any),
      "keydown",
      (e: any) => e.keyCode === 27 && hideImage()
    );
    
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
      <main className={styles.container}>
        <DatePicker withPortal className={styles.datepicker} selected={startDate} dateFormat="yyyy/MM/dd" onChange={handleDateChange} />
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
          <motion.h1 
            className={styles.title}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.3 }}
          >
            { newData.title }
          </motion.h1>
          <div className={styles.textimage}>
            <div
              className={`${styles["image-container"]} ${isOpen ? styles.open : ""}`}
            >
              <motion.div
                animate={{ opacity: isOpen ? 1 : 0 }}
                className={styles.shade}
                onClick={() => setOpen(false)}
              />
              <motion.img
                animate={imgAnimation}
                src={newData.url}
                onMouseMove={e => handleMouseMove(e)}
                onClick={() => setOpen(!isOpen)}
                alt="Picture of the Day"
              />
              <div className={styles.imgBg} />
            </div>
            <p className={styles.text}>{ newData.explanation }</p>
          </div>
      </main>
      <footer className={styles.footer}>
        <h1>
          Posted on 
          <time> {newData.date} </time>
        </h1>
      </footer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default APOD;