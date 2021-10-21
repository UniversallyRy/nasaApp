import { fetcher } from "./fetcher";

export const urlSwitcher = (key: string, date: string | undefined, lon?: number | undefined, lat?: number | undefined): string => {    
    switch(key){
        case "apod": 
            return `https://api.nasa.gov/planetary/apod?date=${date}&api_key=` + process.env.API_KEY;
        case "epic": 
            return `https://epic.gsfc.nasa.gov/api/enhanced/date/${date}?api_key=` + process.env.API_KEY;
        case "landsat":
            return `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&&dim=0.10&date=${date}&api_key=` + process.env.API_KEY;
        case "rover":
            return `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=` + process.env.API_KEY;
        default: 
            return '';    
    }
}

export const fetchedData =  (key: string, date = new Date(), lon ?:number | undefined, lat ?:number | undefined): Promise<any> => {
    let day, month, year, newDay, newMonth; 
    let newDate = undefined;
    let thisDate = date;

    if (thisDate !== undefined){
        [year, month, day] = [thisDate.getFullYear(), thisDate.getMonth() + 1, thisDate.getDate()];
        [newDay, newMonth ] = (key !== 'rover') ? [day.toString().padStart(2, '0'), month.toString().padStart(2, '0')] : [day, month];
        newDate = [year, newMonth, newDay].join('-');
    }

    let url = urlSwitcher(key, newDate, lon, lat);
    let data = fetcher(url);
    return data;
  };
