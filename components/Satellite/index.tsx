import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import FormContainer from "./Form/FormContainer";

const SatContainer = () => {

  return (
    <Box align="center" justify="center" w={{ base: "sm", sm: "md", md: "lg" }}>
      <FormContainer />
    </Box>
  );
};

export default SatContainer;
