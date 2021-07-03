import { Box, FormErrorMessage, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"
import { apiKey } from '../key';
import { useEffect, useContext } from 'react'


const url = (lon:number, lat:number) => {
return `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&dim=0.10&api_key=` + `${apiKey}`;
}

const FormikForm = (ContextContainer:any) => {
    
    const { newData, setData } = useContext(ContextContainer);
    
    function validateNumbers(value:string) {
      let error
      if (!value) {
        error = "No Long/Lat sent"
      }
      return error
    };

    useEffect(() => {
        setData(newData)
      }, [setData, newData]);
    
  
    return (
        <Box maxW="25%">
            <Formik
                initialValues={{ latitude: 1, longitude: 1 }}
                onSubmit={ async (values, actions) => {
                    let lon = values.longitude
                    let lat = values.latitude
                    setTimeout(() => {
                        actions.setSubmitting(false)
                    }, 1000)
                    const res = await fetch(url(lon, lat));
                    const data = await res.json();
                    setData(data)
                }}
            >
                {(props) => (
                <Form>
                    <Field name="latitude" validate={validateNumbers}>
                    {({ field, form }:any) => (
                        <FormControl isInvalid={form.errors.latitude && form.touched.latitude}>
                            <FormLabel htmlFor="latitude">Input Latitude</FormLabel>
                            <Input {...field} type="number" id="latitude" placeholder="Latitude" />
                            <FormErrorMessage>{form.errors.latitude}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    <Field name="longitude" validate={validateNumbers}>
                    {({ field, form }:any) => (
                        <FormControl isInvalid={form.errors.longitude && form.touched.longitude}>
                            <FormLabel htmlFor="longitude">Input Longitude</FormLabel>
                            <Input {...field} type="number" id="longitude" placeholder="Longitude" />
                            <FormErrorMessage>{form.errors.longitude}</FormErrorMessage>
                        </FormControl>
                    )}
                    </Field>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        isLoading={props.isSubmitting}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
                )}
            </Formik>
        </Box>
    )
  };

  export default FormikForm;