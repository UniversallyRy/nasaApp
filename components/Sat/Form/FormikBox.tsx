import { Dispatch, SetStateAction, useContext } from "react";
import { Box } from "@chakra-ui/react";
import { Formik, FormikValues } from "formik";
import Examples from "./Examples";
import { fetchedData } from '../../../utils/getData';
import { FormContext } from "../../../pages/landsat";

type BoxProps = {
  children: React.ReactNode
  isEditing: boolean
  setSubmit: Dispatch<SetStateAction<boolean>>
}

interface FormValues {
  latitude: number
  longitude: number
}

const FormikBox = ({ children, isEditing, setSubmit }: BoxProps) => {

  const initialValues: FormValues = { latitude: 29.9792, longitude: 31.13 };
  const defaultDate = new Date("2/1/21")
  const { submitCoords }: FormikValues = useContext(FormContext);

  return (
    <Box align="center" justify="center" w={{ base: "sm", sm: "md", md: "lg" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          if (!isEditing) {
            setSubmit(true)
            let lon = values.longitude
            let lat = values.latitude
            const data = await fetchedData('landsat', defaultDate, lon, lat);
            setTimeout(() => {
              setSubmit(false)
            }, 3000)
            submitCoords(data)
          } else {
            return null
          }
        }}
      >
        {children}
      </Formik>
      <Examples />
    </Box>
  )
};

export default FormikBox;
