import React from "react";
import { Field } from "formik";

const fixedInputClass = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

type Props = {
  isEditing: boolean;
};

export default function FormInputs({ ...props }: Props) {
  const validateCoordinates = (value: string) => {
    let error;
    if (!value) {
      error = "No coordinates sent";
    }
    return error;
  };

  return (
    <div className="flex flex-row space-x-2 w-full rounded-md shadow-gray-700">
      <Field name="latitude" validate={validateCoordinates}>
        {({ field, form }: any) => (
          <div className="p-1 rounded-sm bg-gray-500 shadow-lg"
            isInvalid={form.errors.latitude && form.touched.latitude}
          >
            <label className="text-xl text-center" htmlFor="latitude">
              Latitude
            </label>
            <input
              {...field}
              textAlign="center"

              type="number"
              id="latitude"
              placeholder="Latitude"
              isDisabled={!props.isEditing}
            />
            <h1>{form.errors.latitude}</h1>
          </div>
        )}
      </Field>
      <Field name="longitude" validate={validateCoordinates}>
        {({ field, form }: any) => (
          <div className="p-1 rounded-sm border-gray-500 shadow-lg"
            isInvalid={form.errors.longitude && form.touched.longitude}
          >
            <label className="text-xl text-center" htmlFor="longitude">
              Longitude
            </label>
            <input
              {...field}
              textAlign="center"
              fontSize="lg"
              type="number"
              id="longitude"
              placeholder="Longitude"
              isDisabled={!props.isEditing}
            />
            <h1>{form.errors.longitude}</h1>
          </div>
        )}
      </Field>
    </div>
  );
};
