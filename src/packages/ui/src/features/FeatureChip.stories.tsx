import type { Meta, StoryObj } from '@storybook/react';
import { FeatureChip } from './FeatureChip';

const meta: Meta<typeof FeatureChip> = {
  title: 'Features/FeatureChip',
  component: FeatureChip,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FeatureChip>;

export const Default: Story = {
  args: {
    children: 'Organic',
    variant: 'default',
  },
};

export const Active: Story = {
  args: {
    children: 'Sugar Free',
    variant: 'active',
  },
};
