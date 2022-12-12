import React from "react";
import { Field } from "formik";

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
    <div className="flex flex-row w-full space-x-2">
      <Field name="latitude" validate={validateCoordinates}>
        {({ field, form }: any) => (
          <div
            className="flex flex-col justify-center p-2 rounded-sm bg-purple-800 text-center shadow-purple-900/80 shadow-sm"
            isInvalid={form.errors.latitude && form.touched.latitude}
          >
            <input
              type="number"
              id="latitude"
              className="text-xl text-center bg-purple-900/40 focus:outline-none focus:ring focus:ring-purple-900 border-0"
              placeholder="Latitude"
              isDisabled={!props.isEditing}
              {...field}
            />
            <label className="text-xs text-end italic pt-1" htmlFor="latitude">
              Latitude
            </label>
            <h1>{form.errors.latitude}</h1>
          </div>
        )}
      </Field>
      <Field name="longitude" validate={validateCoordinates}>
        {({ field, form }: any) => (
          <div
            className="flex flex-col justify-center p-2 rounded-sm bg-purple-800 text-center shadow-purple-900/80 shadow-sm"
            isInvalid={form.errors.longitude && form.touched.longitude}
          >
            <input
              type="number"
              id="longitude"
              className="text-xl text-center bg-purple-900/40 focus:outline-none focus:ring focus:ring-purple-900 border-0"
              placeholder="Longitude"
              isDisabled={!props.isEditing}
              {...field}
            />
            <label className="text-xs text-end italic pt-1" htmlFor="longitude">
              Longitude
            </label>
            <h1>{form.errors.longitude}</h1>
          </div>
        )}
      </Field>
    </div>
  );
}
