import React from "react";
import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "@chakra-ui/react";
import AlienHead from "../components/NavBar/AlienHead";

export default {
  title: "components/AlienHead",
  component: AlienHead,
} as Meta<typeof AlienHead>;

//const handleClick = () => {
//  console.log("Clicked");
//};

const Template: Story<ButtonProps> = (args) => <AlienHead {...args} />;

export const DefaultSizeLightTheme = Template.bind({});
DefaultSizeLightTheme.args = {
  boxSize: "65",
  bg: "gray.200",
};

export const ThemeDark = Template.bind({});
ThemeDark.args = {
  ...DefaultSizeLightTheme.args,
  bg: "gray.800",
};

export const Enlarged = Template.bind({});
Enlarged.args = {
  boxSize: "300",
  bg: "gray.200",
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...DefaultSizeLightTheme.args,
};

Clicked.parameters = {
  backgrounds: {
    actions: {
      handles: ["click"],
    },
  },
};

export const Hover = Template.bind({});
Hover.args = {
  ...DefaultSizeLightTheme.args,
};

Hover.parameters = {
  actions: {
    handles: ["mouseover"],
  },
};
