import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from "@chakra-ui/react"
import AlienButton  from '../components/AlienHead';

export default {
  title: 'components/alien',
  component: AlienButton,
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
  },
} as ComponentMeta<typeof AlienButton>;

const Template: ComponentStory<typeof Button>= ({args}) => <AlienButton {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
    size:"65px",
    p: "10"
};

export const ThemeLight = Template.bind({});
ThemeLight.args = {
    size:"300px",
    bg: "gray.300"
};
export const ThemeDark = Template.bind({});
ThemeDark.args = {
    size:"300px",
    bg: "gray.800"
};

export const Enlarged = Template.bind({});
Enlarged.args = {
    size:"100px",
    bg: "gray.300"
};

