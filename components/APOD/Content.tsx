import React, { useState } from "react";
import MotionImage from "./Image";
import MotionBackGround from "./BackGround";
import { APODDataType } from "../../utils/types";

type Props = {
  data: APODDataType;
};

export default function Content({ ...props }: Props) {
  const { data } = props;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex py-5 bg-purple-900 rounded-md shadow-xl flex-col items-center
      base:w-sm sm:w-1/6 md:w-2/6 lg:w-3/6 xl:w-4/6"
    >
      <div className="flex flex-col md:flex-row gap-20">
        <MotionBackGround
          isOpen={open}
          setOpen={setOpen}
        />
        <MotionImage
          data={data}
          isOpen={open}
          setOpen={setOpen}
        />
        <p className="m-2 select-none whitespace-normal break-words self-center leading-snug md:leading-relaxed text-sm tracking-wide
          sm:text-sm md:text-lg xl:text-xl sm:max-w-sm md:max-w-lg"
        >
          {data.explanation}
        </p>
      </div>
    </div>
  );
};
