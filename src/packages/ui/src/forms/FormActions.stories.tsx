import type { Meta, StoryObj } from '@storybook/react';
import { FormActions } from './FormActions';
import { Button } from '../primitives/Button';
import * as React from 'react';

const meta: Meta<typeof FormActions> = {
  title: 'Forms/FormActions',
  component: FormActions,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormActions>;

export const Default: Story = {
  render: () => (
    <FormActions>
      <Button priority="secondary">Cancel</Button>
      <Button>Submit</Button>
    </FormActions>
  ),
};

export const FullWidthMobile: Story = {
  render: () => (
    <FormActions className="flex-col md:flex-row">
      <Button priority="secondary" className="w-full md:w-auto">Cancel</Button>
      <Button className="w-full md:w-auto">Submit</Button>
    </FormActions>
  ),
};
