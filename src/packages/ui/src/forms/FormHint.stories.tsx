import type { Meta, StoryObj } from '@storybook/react';
import { FormHint } from './FormHint';

const meta: Meta<typeof FormHint> = {
  title: 'Forms/FormHint',
  component: FormHint,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormHint>;

export const Default: Story = {
  args: {
    children: 'Use at least 8 characters.',
  },
};
