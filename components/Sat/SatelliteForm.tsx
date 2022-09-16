import React, { useState, useContext } from 'react';
import { Formik, Form, Field } from "formik";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  useColorModeValue,
  Box,
  HStack,
  FormErrorMessage,
  Button,
  FormControl,
  FormLabel,
  Input,
  Popover,
  useBoolean,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FormContext } from '../../pages/landsat';
import { fetchedData } from '../../utils/getData';

interface FormValues {
  latitude: number
  longitude: number
};

const FormikForm = () => {
  const initialValues: FormValues = { latitude: 29.9792, longitude: 31.13 };
  const { coordinates, submitCoords }: any = useContext(FormContext);
  const [isSubmitting, setSubmit] = useState(false);
  const backGround = useColorModeValue("blue.500", "purple.900");
  const defaultDate = new Date("2/1/21")
  const [isEditing, setIsEditing] = useBoolean()

  const validateNumbers = (value: string) => {
    let error
    if (!value) {
      error = "No coordinates sent"
    }
    return error
  };

  return (
    <Popover
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
      closeOnBlur={false}
      isLazy
      lazyBehavior='keepMounted'
    >
      <Box align="center" justify="center" w={{ base: "sm", sm: "md", md: "lg" }}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            if (!isEditing) {
              setSubmit(true)
              let lon = values.longitude
              let lat = values.latitude
              const data = await fetchedData('landsat', defaultDate, lon, lat);
              console.log(coordinates)
              setTimeout(() => {
                setSubmit(false)
              }, 3000)
              submitCoords(data)
            } else {
              return null
            }
          }}
        >
          {() => (
            <Form>
              <HStack spacing={2.5}>
                <Field name="latitude" validate={validateNumbers}>
                  {({ field, form }: any) => (
                    <FormControl p={1} rounded="sm" bg={backGround} shadow="lg" isInvalid={form.errors.latitude && form.touched.latitude}>
                      <FormLabel fontSize="xl" textAlign="center" htmlFor="latitude">Latitude</FormLabel>
                      <Input {...field} textAlign="center" fontSize="lg" type="number" id="latitude" placeholder="Latitude" isDisabled={!isEditing} />
                      <FormErrorMessage>{form.errors.latitude}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="longitude" validate={validateNumbers}>
                  {({ field, form }: any) => (
                    <FormControl p={1} rounded="sm" bg={backGround} shadow="lg" isInvalid={form.errors.longitude && form.touched.longitude}>
                      <FormLabel fontSize="xl" textAlign="center" htmlFor="longitude">Longitude</FormLabel>
                      <Input {...field} textAlign="center" fontSize="lg" type="number" id="longitude" placeholder="Longitude" isDisabled={!isEditing} />
                      <FormErrorMessage>{form.errors.longitude}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <PopoverTrigger>
                <Button
                  size="lg"
                  fontSize="xl"
                  rounded="sm"
                  shadow="xl"
                  m={3}
                  bg={backGround}
                  isLoading={isSubmitting}
                  type="submit"
                  _hover={{
                    bg: 'gray.600'
                  }}
                  _focus={{
                    outline: "hidden"
                  }}
                >
                  {isEditing ? 'SAVE' : 'CHANGE COORDS'}
                </Button>
              </PopoverTrigger>
            </Form>
          )}
        </Formik>
      </Box>

      <PopoverContent _focus={{ outline: "hidden" }}>
        <PopoverCloseButton />
        <PopoverBody>
          <Text fontStyle="italic" fontSize="xl">Examples</Text>
          <Text fontSize="md">Great Pyramid of Giza- Lat: 29.9792, Lon: 31.13</Text>
          <Text fontSize="md">Vegas Strip- Lat: 36.11, Lon: 115.20</Text>
          <Text fontSize="md">Beijing- Lat: 39.9, Lon: 116.4</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
};

export const AlertBox = () => {
  return (
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
};

export default FormikForm;
