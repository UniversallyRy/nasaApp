'use client'

import HeroCard from "../components/HeroCard";
import ChakraNextImage from "../components/Image";
import { cardInfo, CardsInfo } from "../utils/cardInfo";

//todos: more global styling, more loading states, more animations
export default function Home() {
  //const img = "../public/tim-tdd-QoewgBpXJd4-unsplash.jpg";
  function HeroCards() {
    let info = cardInfo.map((item: CardsInfo) => {
      return (
        <HeroCard
          key={item.title}
          href={item.href}
          title={item.title}
          paragraph={item.paragraph}
          imgSrc={item.imgSrc}
        />
      );
    });

    return (
      <section className="p-5 w-5/12 h-max bg-purple-800 grid grid-rows-2 grid-flow-col gap-4">
        {info}
      </section>
    )
  };

  return (
    <div className="flex flex-col min-w-full justify-items-center items-center">
      <title>NASA Info</title>
      <meta name="description" content="Look up information NASA provides" />
      <HeroCards />
      <div className="my-5 pt-5">
        <a
          className="flex flex-row items-center"
          href="https://verscel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Powered by{" "}
          </p>
          <ChakraNextImage
            src="/vercel.svg"
            alt="Vercel Logo"
            className="ml-1 w-16 h-8"
          />
        </a>
        <div>
          Hero icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </div>
  );
};
