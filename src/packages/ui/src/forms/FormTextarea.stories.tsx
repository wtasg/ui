import type { Meta, StoryObj } from '@storybook/react';
import { FormTextarea } from './FormTextarea';

const meta: Meta<typeof FormTextarea> = {
  title: 'Forms/FormTextarea',
  component: FormTextarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Invalid message',
    hasError: true,
  },
};
