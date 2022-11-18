import { ReactNode, Dispatch, SetStateAction, useContext } from "react";
import axios from "axios";
import { FormContext } from "../../../utils/context";
import { fetchedUrl } from "../../../utils/getData";

type Props = {
  children: ReactNode;
};

interface FormValues {
  latitude: number;
  longitude: number;
}

export default function Form({ ...props }: Props) {

  const { children } = props;
  const { submitCoords }: FormikValues = useContext(FormContext);
  const initialValues: FormValues = { latitude: 29.9792, longitude: 31.13 };
  const defaultDate = new Date("2/1/21");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target[0])
    let lat = e.target[0].value;
    let lon = e.target[1].value;
    const data = await axios(fetchedUrl("landsat", defaultDate, lon, lat));
    submitCoords(data);
  }
  return (
    //    <div className="items-center justify-center sm:w-2/12 md:w-7/12">
    //      <Formik
    //        initialValues={initialValues}
    //        onSubmit={async (values) => {
    //          let lon = values.longitude;
    //          let lat = values.latitude;
    //          const data = await axios(fetchedUrl("landsat", defaultDate, lon, lat));
    //          submitCoords(data);
    //        }}
    //      >
    //        {children}
    //      </Formik>
    //    </div>
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="-space-y-px">
      </div>
      {children}
    </form>
  );
};
