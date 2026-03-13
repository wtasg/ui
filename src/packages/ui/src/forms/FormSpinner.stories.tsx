import type { Meta, StoryObj } from '@storybook/react';
import { FormSpinner } from './FormSpinner';

const meta: Meta<typeof FormSpinner> = {
  title: 'Forms/FormSpinner',
  component: FormSpinner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormSpinner>;

export const Default: Story = {};
