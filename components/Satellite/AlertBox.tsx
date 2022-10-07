import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const AlertBox = () => {
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
  );
};

export default AlertBox;
