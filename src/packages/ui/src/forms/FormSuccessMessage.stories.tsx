import type { Meta, StoryObj } from '@storybook/react';
import { FormSuccessMessage } from './FormSuccessMessage';

const meta: Meta<typeof FormSuccessMessage> = {
  title: 'Forms/FormSuccessMessage',
  component: FormSuccessMessage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormSuccessMessage>;

export const Default: Story = {
  args: {
    children: 'Form submitted successfully!',
  },
};
