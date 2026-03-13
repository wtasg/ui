import type { Meta, StoryObj } from '@storybook/react';
import { FormCheckbox } from './FormCheckbox';

const meta: Meta<typeof FormCheckbox> = {
  title: 'Forms/FormCheckbox',
  component: FormCheckbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormCheckbox>;

export const Default: Story = {
  args: {
    id: 'terms',
    label: 'Agree to terms and conditions',
  },
};

export const Error: Story = {
  args: {
    id: 'terms-error',
    hasError: true,
  },
};
