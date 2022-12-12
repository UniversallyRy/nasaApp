"use client";

import { useState } from "react";
import Form from "../../components/Satellite/Form";
import SatelliteImg from "../../components/Satellite/SatelliteImg";
import AlertBox from "../../components/Satellite/AlertBox";
//import { SatDataType } from "../../utils/types";
import { FormContext } from "../../utils/context";

// Todo: add searchable options
export default function LandSat() {
  const [coordinates, submitCoords] = useState(Object);

  return (
    <div className="flex min-h-screen justify-center">
      <title>Satellite Images</title>
      <meta
        property="og:landsat"
        content="Earth Polychromatic Imaging Camera Images"
      />
      <div className="p-4">
        <FormContext.Provider value={{ coordinates, submitCoords }}>
          <Form />
        </FormContext.Provider>
        {coordinates.hasOwnProperty("msg") ? <AlertBox /> : null}
        {coordinates.hasOwnProperty("url") ? (
          <SatelliteImg coordinates={coordinates} />
        ) : undefined}
      </div>
    </div>
  );
}
