'use client'

import { useState } from "react";
import FormContainer from "../../components/Satellite/Form";
import SatelliteImg from "../../components/Satellite/SatelliteImg";
import AlertBox from "../../components/Satellite/AlertBox";
//import { SatDataType } from "../../utils/types";
import { FormContext } from "../../utils/context";

// Todo: add searchable options
export default function LandSat() {
  const [coordinates, submitCoords] = useState(Object);

  return (
    <div className="flex flex-row min-h-screen justify-center">
      <title>Satellite Images</title>
      <meta
        property="og:landsat"
        content="Earth Polychromatic Imaging Camera Images"
      />
      <div className="flex flex-col m-3 space-x-2 md:flex-row">
        <FormContext.Provider value={{ coordinates, submitCoords }}>
          <FormContainer />
        </FormContext.Provider>
      </div>
      {coordinates.hasOwnProperty("msg") ? <AlertBox /> : null}
      {coordinates.hasOwnProperty("url")
        ? <SatelliteImg coordinates={coordinates} />
        : undefined}
    </div>
  );
};
