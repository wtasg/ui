import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Primitives/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'col'],
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'default', 'lg', 'xl'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end', 'stretch'],
    },
    justify: {
      control: 'select',
      options: ['start', 'center', 'end', 'between'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  args: {
    direction: 'col',
    gap: 'default',
  },
  render: (args) => (
    <Stack {...args} className="p-4 border border-dashed border-neutral-300">
      <div className="w-20 h-10 bg-primary-200 rounded" />
      <div className="w-32 h-10 bg-primary-300 rounded" />
      <div className="w-24 h-10 bg-primary-400 rounded" />
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {
    direction: 'row',
    gap: 'lg',
    align: 'center',
  },
  render: (args) => (
    <Stack {...args} className="p-4 border border-dashed border-neutral-300">
      <div className="w-10 h-10 bg-accent-200 rounded" />
      <div className="w-10 h-10 bg-accent-300 rounded" />
      <div className="w-10 h-10 bg-accent-400 rounded" />
    </Stack>
  ),
};
