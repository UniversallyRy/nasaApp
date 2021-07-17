import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from "@chakra-ui/react"
import AlienHead  from '../components/AlienHead';

export default {
  title: 'components/alien',
  component: AlienHead,
  parameters: {
    actions: {
      handles: ['mouseover'],
    },
  },

} as ComponentMeta<typeof AlienHead>;

const Template: ComponentStory<typeof Box> = (args) => <AlienHead {...args} />;

export const DefaultSize = Template.bind({});
DefaultSize.args = {
    size:"300px",
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
    bg: "gray.600"
};

export const AsNavIcon = Template.bind({});
AsNavIcon.args = {
    size:"100px",
    bg: "gray.300"
};

