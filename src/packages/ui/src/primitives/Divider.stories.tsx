import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Primitives/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    weight: {
      control: 'select',
      options: ['thin', 'default', 'thick'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-full h-20 flex flex-col justify-center">
      <p className="text-sm mb-2">Content above</p>
      <Divider {...args} />
      <p className="text-sm mt-2">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="w-full h-20 flex items-center gap-4">
      <p className="text-sm">Left</p>
      <div className="h-full py-2">
        <Divider {...args} />
      </div>
      <p className="text-sm">Right</p>
    </div>
  ),
};
