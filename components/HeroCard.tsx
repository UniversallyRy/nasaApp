import React from "react";
import NextLink from "next/link";
import Image from "next/legacy/image";

type Props = {
  title: string;
  paragraph: string;
  href: string;
  imgSrc: string;
  key: string;
};

export default function HeroCard({ ...props }: Props) {
  return (
    <NextLink passHref href={props.href} legacyBehavior>
      <div className="relative flex flex-col space-x-2 p-2 items-center shadow-black/20 shadow-md border-black/90 hover:bg-purple-900 hover:cursor-pointer">
        <Image
          width="150"
          height="150"
          src={props.imgSrc}
          alt="Icon made by Freepik from www.flaticon.com"
        />
        <a className="m-2 font-bold">{props.title}</a>
        <p className="m-5 font-semibold">{props.paragraph}</p>
      </div>
    </NextLink>
  );
}
