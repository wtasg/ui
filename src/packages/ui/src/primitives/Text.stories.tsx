import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'accent', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

export const Muted: Story = {
  args: {
    children: 'This text is muted for secondary information.',
    color: 'muted',
  },
};

export const Large: Story = {
  args: {
    children: 'Large text for emphasizing content.',
    size: 'lg',
  },
};
