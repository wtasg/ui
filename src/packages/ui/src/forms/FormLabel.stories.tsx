import type { Meta, StoryObj } from '@storybook/react';
import { FormLabel } from './FormLabel';

const meta: Meta<typeof FormLabel> = {
  title: 'Forms/FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormLabel>;

export const Default: Story = {
  args: {
    children: 'Full Name',
  },
};

export const Required: Story = {
  args: {
    children: (
      <>
        Email Address <span className="text-red-500">*</span>
      </>
    ),
  },
};
