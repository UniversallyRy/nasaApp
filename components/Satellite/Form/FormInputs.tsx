import React from "react";
import { HStack, FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react";
import { Field } from "formik";

type InputProps = {
  backGround: string;
  isEditing: boolean;
}

const FormInputs = ({ backGround, isEditing }: InputProps) => {

  const validateCoordinates = (value: string) => {
    let error
    if (!value) {
      error = "No coordinates sent"
    }
    return error
  };

  return (
    <HStack spacing={2.5}>
      <Field name="latitude" validate={validateCoordinates}>
        {({ field, form }: any) => (
          <FormControl p={1} rounded="sm" bg={backGround} shadow="lg" isInvalid={form.errors.latitude && form.touched.latitude}>
            <FormLabel fontSize="xl" textAlign="center" htmlFor="latitude">Latitude</FormLabel>
            <Input {...field} textAlign="center" fontSize="lg" type="number" id="latitude" placeholder="Latitude" isDisabled={!isEditing} />
            <FormErrorMessage>{form.errors.latitude}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
      <Field name="longitude" validate={validateCoordinates}>
        {({ field, form }: any) => (
          <FormControl p={1} rounded="sm" bg={backGround} shadow="lg" isInvalid={form.errors.longitude && form.touched.longitude}>
            <FormLabel fontSize="xl" textAlign="center" htmlFor="longitude">Longitude</FormLabel>
            <Input {...field} textAlign="center" fontSize="lg" type="number" id="longitude" placeholder="Longitude" isDisabled={!isEditing} />
            <FormErrorMessage>{form.errors.longitude}</FormErrorMessage>
          </FormControl>
        )}
      </Field>
    </HStack >
  )
};

export default FormInputs;
