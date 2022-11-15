import React, { useState } from "react";
import MotionImage from "./Image";
import MotionBackGround from "./BackGround";
import { APODDataType } from "../../utils/types";

type Props = {
  newData: APODDataType;
};

export default function Content({ ...props }: Props) {
  const { newData } = props;
  const [open, setOpen] = useState(false);
  // const handleImg = useDisclosure();
  return (
    <div
      className="flex py-10 bg-purple-900 rounded-md border-gray-700 shadow-xl flex-col border-2 items-center
      base:w-sm sm:w-1/6 md:w-2/6 lg:w-3/6 xl:w-4/6"
    >
      <div className="p-3 flex flex-col md:flex-row gap-8">
        <MotionBackGround
          data={newData}
          isOpen={open}
          setOpen={setOpen}
        />
        <MotionImage
          data={newData}
          isOpen={open}
          setOpen={setOpen}
        />
        <p className="m-2 select-none whitespace-normal break-words self-center leading-snug md:leading-relaxed text-sm tracking-wide
          sm:text-sm md:text-lg xl:text-xl sm:max-w-sm md:max-w-lg"
        >
          {newData.explanation}
        </p>
      </div>
    </div>
  );
};

