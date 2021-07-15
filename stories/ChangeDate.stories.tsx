import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from "@chakra-ui/react"
import ChangeDate  from '../components/ChangeDate';
import {ReactDatePickerProps} from "react-datepicker";


export default {
  title: 'components/ChangeDate',
  component: ChangeDate,
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as ComponentMeta<typeof ChangeDate>;

const Template: ComponentStory<typeof Box> = (args) => <ChangeDate {...args} />;

const handleChange = () => {
    return new Date()
}
export const Default = Template.bind({});
Default.args = {
    selected: new Date('1995-12-17T03:24:00'),
    onChange: handleChange
};


