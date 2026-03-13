import type { Meta, StoryObj } from '@storybook/react';
import { FormDivider } from './FormDivider';

const meta: Meta<typeof FormDivider> = {
  title: 'Forms/FormDivider',
  component: FormDivider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormDivider>;

export const Default: Story = {
  args: {
    children: 'Personal Information',
  },
};

export const Plain: Story = {
  args: {},
};
