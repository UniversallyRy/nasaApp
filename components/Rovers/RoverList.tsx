import { useState, useMemo } from "react";
import RoverItem from "./RoverItem";
import { RoverPhotoType } from "../../utils/types";
import RoverSelect from "./RoverSelect";

type Props = {
  data: RoverPhotoType[];
};

const RoverList = ({ data }: Props) => {
  const [roverCamera, setCamera] = useState("FHAZ");
  const [currentSlide, setNewSlide] = useState(0);

  const getSlides = () => {
    let count = 0;
    if (data instanceof Array) {
      data.map((item: RoverPhotoType, _index: number) => {
        if (item.camera.name == roverCamera) {
          count++;
        }
      });
    }
    return count;
  };

  const slidesCount = getSlides();

  const prevSlide = () => {
    setNewSlide((s: number) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setNewSlide((s: number) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setNewSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const arrowStyles = {
    cursor: "pointer",
    top: "50%",
    w: "auto",
    mt: "-22",
    p: "4",
    color: "white",
    fontWeight: "bold",
    fontSize: "2xl",
    transition: "0.5s ease",
    borderRadius: "0 3px 3px 0",
    _hover: {
      opacity: 0.4,
      bg: "black",
    },
  };

  const memoedPhotos = useMemo(() => {
    const photosArray: React.ReactNode[] = [];
    if (data instanceof Array) {
      data.map((item: RoverPhotoType, index: number) => {
        if (item.camera.name == roverCamera) {
          photosArray.push(
            <RoverItem
              slidesCount={slidesCount}
              index={photosArray.length}
              key={index}
              item={item}
            />
          );
        }
      });
    }
    return photosArray;
  }, [data, slidesCount, roverCamera]);

  return (
    <div className="self-center">
      <RoverSelect setCamera={setCamera} />
      <div className="w-full relative overflow-hidden">
        <div className="w-full h-full" {...carouselStyle}>
          {memoedPhotos}
        </div>
        <h1
          className="select-none absolute left-0"
          {...arrowStyles}
          onClick={prevSlide}
        >
          &#10094;
        </h1>
        <h1
          className="select-none absolute right-0"
          {...arrowStyles}
          onClick={nextSlide}
        >
          &#10095;
        </h1>
        <div className="flex-row justify-center absolute bottom-3">
          {Array.from({ length: slidesCount }).map((_, slide) => {
            if (slidesCount <= 10) {
              <div
                className={
                  currentSlide == slide
                    ? "bg-gray-800 "
                    : "bg-gray-500 " +
                      "transition duration-500 ease-in-out cursor-pointer rounded-xl inline-block hover:bg-gray-800"
                }
                key={`dots-${slide}`}
                onClick={() => setSlide(slide)}
              />;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default RoverList;
