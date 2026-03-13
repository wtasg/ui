import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSectionHeader } from './FeatureSectionHeader';
import { Button } from '../primitives/Button';
import * as React from 'react';

const meta: Meta<typeof FeatureSectionHeader> = {
  title: 'Features/FeatureSectionHeader',
  component: FeatureSectionHeader,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FeatureSectionHeader>;

export const LeftAligned: Story = {
  args: {
    heading: 'Our Premium Selection',
    subtitle: 'Explore our wide range of beverages crafted with care.',
    align: 'left',
  },
};

export const CenterAligned: Story = {
  args: {
    heading: 'Why Choose Us?',
    subtitle: 'We prioritize quality, sustainability, and taste in every bottle.',
    align: 'center',
  },
};

export const WithActions: Story = {
  args: {
    heading: 'Latest Updates',
    subtitle: 'Stay informed about our new product launches and sustainability efforts.',
    actions: <Button size="sm">View All</Button>,
    align: 'left',
  },
};
