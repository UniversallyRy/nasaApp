import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Box, BoxProps } from "@chakra-ui/react"
import ChangeDate from '../components/ChangeDate';
import { ReactDatePickerProps } from "react-datepicker";


export default {
  title: 'components/ChangeDate',
  component: ChangeDate,
  parameters: {
    actions: {
      handles: ['onChange'],
    },
  },
} as Meta<typeof ChangeDate>;

// const Template: Story<BoxProps> = (args) => <ChangeDate {...args} selected={new Date('1995-12-17T03:24:00')} />;

const handleChange = () => {
  return new Date()
}
// export const Default = Template.bind({});
// Default.args = {
//     onChange: handleChange
// };


