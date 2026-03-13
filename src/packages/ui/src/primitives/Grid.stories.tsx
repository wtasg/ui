import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Primitives/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'number',
      min: 1,
      max: 12,
    },
    gap: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'default', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    cols: 3,
    gap: 'default',
  },
  render: (args) => (
    <Grid {...args} className="p-4 border border-dashed border-neutral-300">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="bg-primary-100 h-20 rounded flex items-center justify-center text-primary-700 font-bold">
          {i + 1}
        </div>
      ))}
    </Grid>
  ),
};
