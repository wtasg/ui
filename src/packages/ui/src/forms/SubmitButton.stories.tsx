import type { Meta, StoryObj } from '@storybook/react';
import { SubmitButton } from './SubmitButton';

const meta: Meta<typeof SubmitButton> = {
  title: 'Forms/SubmitButton',
  component: SubmitButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {
  args: {
    children: 'Submit Form',
  },
};

export const Loading: Story = {
  args: {
    children: 'Submit Form',
    loading: true,
  },
};
