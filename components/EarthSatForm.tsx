import { Alert, AlertIcon, AlertTitle, useColorModeValue, Box, HStack, FormErrorMessage, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { Formik, Form, Field } from "formik"
import React, { useState, useContext } from 'react'
import { FormContext } from '../pages/landsat';
import { fetchedData } from '../utils/endpoints'

interface FormValues  {
    latitude: number
    longitude: number
}

const FormikForm = () => {
    const initialValues: FormValues = { latitude: 29.9792, longitude: 31.13 };
    const { coordinates, submitCoords }:any = useContext(FormContext);
    const [isSubmitting, setSubmit] = useState(false)
    const backGround = useColorModeValue("blue.500", "purple.900");
    
    const validateNumbers = (value:string) => {
      let error
      if (!value) {
        error = "No Long/Lat sent"
      }
      return error
    };

    return (
        <Box align="center" w={{base: "sm", sm:"md", md:"lg"}}>
            <Formik
                initialValues={initialValues}
                onSubmit={ async (values) => {
                    setSubmit(true)
                    let lon = values.longitude
                    let lat = values.latitude
                    setTimeout(() => {
                        setSubmit(false)
                    }, 3000)
                    const data = await fetchedData('earthsat', undefined, lon, lat);
                    submitCoords(data)
                }}
            >
                {() => (
                <Form>
                    <HStack spacing={2.5}>
                        <Field name="latitude" validate={validateNumbers}>
                        {({ field, form }:any) => (
                            <FormControl isInvalid={form.errors.latitude && form.touched.latitude}>
                                <FormLabel fontSize="xl" textAlign="center" htmlFor="latitude">Latitude</FormLabel>
                                <Input {...field} fontSize="lg" type="number" id="latitude" placeholder="Latitude" />
                                <FormErrorMessage>{form.errors.latitude}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                        <Field name="longitude" validate={validateNumbers}>
                        {({ field, form }:any) => (
                            <FormControl isInvalid={form.errors.longitude && form.touched.longitude}>
                                <FormLabel fontSize="xl" textAlign="center" htmlFor="longitude">Longitude</FormLabel>
                                <Input {...field} fontSize="lg" type="number" id="longitude" placeholder="Longitude" />
                                <FormErrorMessage>{form.errors.longitude}</FormErrorMessage>
                            </FormControl>
                        )}
                        </Field>
                    </HStack>
                    <Button
                        size="lg"
                        fontSize="xl"
                        m={3}
                        bg={backGround}
                        isLoading={isSubmitting}
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

export const AlertBox = () => {
    return(
        <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            height="2xs"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <AlertIcon boxSize="lg" />
            <AlertTitle mb={1} mt={4} fontSize="lg">
                No Data Found
            </AlertTitle>
        </Alert>
    )
}


export default FormikForm;