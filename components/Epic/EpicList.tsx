import React, { useState, useMemo } from "react";
import EpicItem from "./EpicItem";
import { EpicDataType } from "../../utils/types";

interface Props {
  data: EpicDataType[];
}

const EpicList = ({ data }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = data.length;

  //               transition="background-color 0.6s ease"
  // tailwind style for arrow pointers
  const arrowStyles =
    'cursor-pointer top-1/2 w-auto mb-5 p-3 text-white font-bold rounded-sm hover:opacity-8 hover:bg-black'


  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide: any) => {
    setCurrentSlide(slide);
  };

  const memoedList = useMemo(() => {
    if (data instanceof Array) {
      return data.map((item: any, index: any) => (
        <EpicItem
          slidesCount={slidesCount}
          key={item.identifier}
          item={item}
          index={index}
        />
      ));
    } else {
      return <p>No Images</p>;
    }
  }, [data, slidesCount]);

  return (
    <div className="flex p-1 rounded-sm shadow-2xl items-center justify-center bg-purple-900 w-1/6 sm:w-3/6 md:w-4/6 lg:w-5/6"   >
      {slidesCount > 0 ? (
        <div className="flex w-full relative overflow-hidden">
          <div className="flex h-full w-full" {...carouselStyle}>
            {memoedList}
          </div>
          <p className={"select-none absolute left-0" + { arrowStyles }}
            onClick={prevSlide}
          >
            &#10094;
          </p>
          <p className={'select-none absolute right-0 ' + { arrowStyles }}
            onClick={nextSlide}
          >
            &#10095;
          </p>
          <div className="flex flex-col w-full justify-center absolute bottom-2">
            {Array.from({ length: slidesCount }).map((_, slide) =>
              <div className={`${currentSlide === slide ? 'bg-gray-800' : 'bg-gray-500'} cursor-pointer w-4 h-4 mx-1 rounded-full inline-block hover:bg-gray-800 transition`}
                key={`dots-${slide}`}
                onClick={() => setSlide(slide)}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-96 flex flex-col items-center justify-center">
          <h1 className="mt-4 mb-1 text-lg">
            No Images Found
          </h1>
          <p className="max-w-md">
            No images taken on this date, try another!
          </p>
        </div>
      )}
    </div>
  );
};

export default EpicList;
