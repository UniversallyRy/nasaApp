import { Dispatch, SetStateAction, useContext } from "react";
import { Formik, FormikValues } from "formik";
import axios from "axios";
import Examples from "./Examples";
import { FormContext } from "../../../utils/context";
import { fetchedUrl } from "../../../utils/getData";

type Props = {
  children: React.ReactNode;
  isEditing: boolean;
  setSubmit: Dispatch<SetStateAction<boolean>>;
};

interface FormValues {
  latitude: number;
  longitude: number;
}

export default function FormikBox({ ...props }: Props) {
  const { submitCoords }: FormikValues = useContext(FormContext);
  const initialValues: FormValues = { latitude: 29.9792, longitude: 31.13 };
  const defaultDate = new Date("2/1/21");

  return (
    <div className="items-center justify-center sm:w-2/12 md:w-7/12">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          if (!props.isEditing) {
            props.setSubmit(true);
            let lon = values.longitude;
            let lat = values.latitude;
            const data = await axios(fetchedUrl("landsat", defaultDate, lon, lat));
            setTimeout(() => {
              props.setSubmit(false);
            }, 3000);
            submitCoords(data);
          } else {
            return null;
          }
        }}
      >
        {props.children}
      </Formik>
      <Examples />
    </div>
  );
};

