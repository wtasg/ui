import type { Meta, StoryObj } from '@storybook/react';
import { FormSelect } from './FormSelect';

const meta: Meta<typeof FormSelect> = {
  title: 'Forms/FormSelect',
  component: FormSelect,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FormSelect>;

export const Default: Story = {
  args: {
    id: 'select-country',
    label: 'Select Country',
    options: [
      { label: 'United States', value: 'us' },
      { label: 'Canada', value: 'ca' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Germany', value: 'de' },
    ],
  },
};

export const WithPlaceholder: Story = {
  args: {
    id: 'select-framework',
    label: 'Framework',
    placeholder: 'Choose a framework',
    options: [
      { label: 'React', value: 'react' },
      { label: 'Next.js', value: 'nextjs' },
      { label: 'Vite', value: 'vite' },
    ],
  },
};

export const WithError: Story = {
  args: {
    id: 'select-priority',
    label: 'Priority',
    options: [
      { label: 'Low', value: 'low' },
      { label: 'Medium', value: 'medium' },
      { label: 'High', value: 'high' },
    ],
    hasError: true,
  },
};
