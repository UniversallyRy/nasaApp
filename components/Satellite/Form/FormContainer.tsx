import { ReactNode, useContext } from "react";
import axios from "axios";
import { FormContext } from "../../../utils/context";
import { fetchedUrl } from "../../../utils/getData";

type Props = {
  children: ReactNode;
};

export default function Form({ ...props }: Props) {

  const { children } = props;
  const { submitCoords }: any = useContext(FormContext);
  const defaultDate = new Date("2/1/21");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let lat = e.target[0].value;
    let lon = e.target[1].value;
    const data = await axios(fetchedUrl("landsat", defaultDate, lon, lat));
    submitCoords(data);
  }
  return (
    <form className="flex space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        {children}
      </div>
    </form>
  );
};
