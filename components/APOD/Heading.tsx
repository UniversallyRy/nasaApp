import { Dispatch, SetStateAction } from "react";
import axios, { AxiosResponse } from "axios";
import ChangeDate from "../ChangeDate";
import { fetchedUrl } from "../../utils/getData";

type Props = {
  title: string;
  setData: Dispatch<SetStateAction<AxiosResponse<string, Date>>>;
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date>>;
};

export default function Heading({ ...props }: Props) {

  const { setData, setStartDate, title, startDate } = props;

  const handleDateChange = async (date: Date) => {
    if (new Date() < date) return;
    console.log(date)
    const data = await axios(fetchedUrl("apod", date));
    setData(data);
    setStartDate(date);
    if (!data) {
      throw new Error('Failed to fetch data');
    }
  };

  return (
    <div className="self-center">
      <title>{title}</title>
      <meta
        property="og:pic"
        content="Astronomy Picture of the Day"
        key={title + "_headingKey"}
      />
      <ChangeDate selected={startDate} onChange={handleDateChange} />
    </div>
  );
}
