import React from "react";
import { addDecorator } from "@storybook/react";
import { Box, CSSReset, ChakraProvider } from "@chakra-ui/react";

export const Chakra = ({ children }) => (
  <ChakraProvider>
    <CSSReset />
    <Box m={5} p={5}>
      {children}
    </Box>
  </ChakraProvider>
);

addDecorator((StoryFn) => (
  <Chakra>
    <StoryFn />
  </Chakra>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      bg: /(background|bg)$/i,
      date: /Date$/,
    },
  },
};
