import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';
import { FormLabel } from './FormLabel';
import { FormInput } from './FormInput';
import * as React from 'react';

const meta: Meta<typeof FormField> = {
  title: 'Forms/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => (
    <FormField>
      <FormLabel>Username</FormLabel>
      <FormInput placeholder="janesmith" />
    </FormField>
  ),
};
