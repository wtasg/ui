import type { Meta, StoryObj } from '@storybook/react';
import { FormInput } from './FormInput';

const meta: Meta<typeof FormInput> = {
  title: 'Forms/FormInput',
  component: FormInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid input',
    hasError: true,
    defaultValue: 'Bad value',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Cannot type here',
    disabled: true,
  },
};
