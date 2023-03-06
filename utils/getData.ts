const urlSwitcher = (
  key: string,
  date: string | undefined,
  lon?: number | undefined,
  lat?: number | undefined
): string => {
  switch (key) {
    case "apod":
      return (
        `https://api.nasa.gov/planetary/apod?api_key=` + process.env.API_KEY
      );
    case "epic":
      return (
        `https://api.nasa.gov/EPIC/api/enhanced/date/${date}?api_key=` +
        process.env.API_KEY
      );
    case "landsat":
      return (
        `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&&dim=0.10&date=${date}&api_key=` +
        process.env.API_KEY
      );
    case "rover":
      return (
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=` +
        process.env.API_KEY
      );
    default:
      return "";
  }
};

export const fetchedUrl = (
  key: string,
  date: Date = new Date(),
  lon?: number | undefined,
  lat?: number | undefined
): any => {
  let day, month, year, newDay, newMonth;
  let newDate = undefined;
  let thisDate = date;

  if (thisDate !== undefined) {
    [year, month, day] = [
      thisDate.getFullYear(),
      thisDate.getMonth() + 1,
      thisDate.getDate(),
    ];
    [newDay, newMonth] =
      key !== "rover"
        ? [day.toString().padStart(2, "0"), month.toString().padStart(2, "0")]
        : [day, month];
    newDate = [year, newMonth, newDay].join("-");
  }

  let url = urlSwitcher(key, newDate, lon, lat);
  return url;
};
