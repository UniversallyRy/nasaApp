import React from 'react';
import { Story, Meta } from '@storybook/react';
import { FlexProps } from "@chakra-ui/react"
import EpicItem from '../components/Epic/EpicItem';

export default {
  title: 'components/EpicItem',
  component: EpicItem,
} as Meta<typeof EpicItem>;

const handleClick = () => {
  console.log('Clicked');
};

const item = {
  title: 'Epic Title',
  image: 'epic_RGB_20210712005516',
  date: '2021/07/12',
  caption: 'example caption',
  centroid_coordinates: {
    lat: '10',
    lon: '10',
  },
};

const Template: Story<FlexProps> = (args) => <EpicItem {...args} slidesCount={1} key={item.date} item={item} index={1} />;

export const Default = Template.bind({});
Default.args = {
}
