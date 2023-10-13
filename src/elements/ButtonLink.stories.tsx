import { Meta, StoryFn } from '@storybook/react';
import ButtonLink, { Props } from './ButtonLink';

const meta = {
  title: 'Elements/ButtonLink',
  component: ButtonLink,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ButtonLink>;

export default meta;

// Define the Template that will be used for all stories
const Template: StoryFn<Props> = args => <ButtonLink {...args} />;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};
