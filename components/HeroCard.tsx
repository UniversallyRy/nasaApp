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
//   userSelect="none"
//    whileHover={{
//      position: "relative",
///      zIndex: "auto",
//     scale: [1, 1.02, 1],
//     transition: {
//       duration: 0.3,
//     },
//   }}
//   _focus={{ outline: "none" }}
//   rounded="md"
//   shadow="lg"/
//   position="relative"
//  mt="4"
//    bg={backGround}
//   border="2px"
//   borderColor="blackAlpha.100"
//   boxSize={{ base: "sm", lg: "md" }}
export default function HeroCard({ ...props }: Props) {

  return (
    <div
      className="flex flex-col mt-5 mb-1 p-5 shadow-black shadow-lg relative border-black"
    >
      <Image
        width="150"
        height="150"
        src={props.imgSrc}
        alt="Icon made by Freepik from www.flaticon.com"
      />
      <NextLink passHref href={props.href} legacyBehavior>
        <a className="font-bold hover:underline">
          {props.title}
        </a>
      </NextLink>
      <p className="font-semibold m-5">
        {props.paragraph}
      </p>
    </div>
  );
};

