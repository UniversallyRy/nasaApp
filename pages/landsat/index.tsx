import { NextPage } from "next";
import Head from "next/head";
import { useState, createContext } from "react";
import { Stack } from "@chakra-ui/react";
import FormContainer from "../../components/Satellite/Form";
import SatelliteImg from "../../components/Satellite/SatelliteImg";
import AlertBox from "../../components/Satellite/AlertBox";
import { SatDataType } from "../../utils/types";

// Todo: add searchable options

export const FormContext = createContext({});

const LandSat: NextPage<{ data: SatDataType }> = () => {
  const [coordinates, submitCoords] = useState(Object);
  return (
    <Stack minH="100vh" align="center">
      <Head key="pages/landsat key">
        <title>Satellite Images</title>
        <meta
          property="og:landsat"
          content="Earth Polychromatic Imaging Camera Images"
          key={0}
        />
      </Head>
      <Stack m={3} spacing={10} direction={{ base: "column", md: "row" }}>
        <FormContext.Provider value={{ coordinates, submitCoords }}>
          <FormContainer />
        </FormContext.Provider>
      </Stack>
      {coordinates.hasOwnProperty("msg") ? <AlertBox /> : null}
      {coordinates.hasOwnProperty("url") ? (
        <SatelliteImg coordinates={coordinates} />
      ) : null}
    </Stack>
  );
};

export default LandSat;
