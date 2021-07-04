import { Alert, AlertIcon, AlertTitle, useColorModeValue, HStack, FormErrorMessage, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"
import { apiKey } from '../key';
import { useState, useContext, useEffect } from 'react'
import { FormContext } from './../pages/earth';


const url = (lon:number, lat:number) => {
return `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&&dim=0.10&date=2021-06-01&api_key=` + `${apiKey}`;
}

export const AlertBox = () => {
    
    return(
        <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
                No Data Found
            </AlertTitle>
        </Alert>
    )
}

const FormikForm = () => {
    const { newData, setData }:any = useContext(FormContext);
    const [isSubmitting, setSubmit] = useState(false)
    const bg = useColorModeValue("blue.500", "purple.900");
    
    const validateNumbers = (value:string) => {
      let error
      if (!value) {
        error = "No Long/Lat sent"
      }
      return error
    };

    return (
        <HStack alignSelf="center" width="400px">
            <Formik
                initialValues={{ latitude: 29.9792, longitude: 31.13 }}
                onSubmit={ async (values) => {
                    setSubmit(true)
                    let lon = values.longitude
                    let lat = values.latitude
                    setTimeout(() => {
                        setSubmit(false)
                    }, 3000)
                    const res = await fetch(url(lon, lat));
                    const data = await res.json();
                    setData(data)
                }}
            >
                {() => (
                <Form>
                    <HStack m={4} spacing="10px">
                        <Field name="latitude" validate={validateNumbers}>
                        {({ field, form }:any) => (
                            <FormControl isInvalid={form.errors.latitude && form.touched.latitude}>
                                <FormLabel textAlign="center" htmlFor="latitude">Latitude</FormLabel>
                                <Input {...field} type="number" id="latitude" placeholder="Latitude" />
                                <FormErrorMessage>{form.errors.latitude}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field name="longitude" validate={validateNumbers}>
                        {({ field, form }:any) => (
                            <FormControl isInvalid={form.errors.longitude && form.touched.longitude}>
                                <FormLabel textAlign="center" htmlFor="longitude">Longitude</FormLabel>
                                <Input {...field} type="number" id="longitude" placeholder="Longitude" />
                                <FormErrorMessage>{form.errors.longitude}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                    </HStack>
                    <Button
                        mb={10}
                        bg={bg}
                        isLoading={isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
                )}
            </Formik>
        </HStack>
    )
  };

  export default FormikForm;