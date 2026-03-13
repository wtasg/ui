import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSection } from './FeatureSection';
import * as React from 'react';

const meta: Meta<typeof FeatureSection> = {
  title: 'Layouts/FeatureSection',
  component: FeatureSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FeatureSection>;

const mockFeatures = [
  {
    title: 'Pure Source',
    description: 'Sourced from protected mountain springs for unparalleled purity.',
    icon: <span>💧</span>,
  },
  {
    title: 'Eco-Friendly',
    description: '100% recyclable packaging and sustainable harvesting methods.',
    icon: <span>🌿</span>,
  },
  {
    title: 'Rapid Delivery',
    description: 'Get your orders delivered fresh within 24 hours of bottling.',
    icon: <span>⚡</span>,
  },
];

export const Default: Story = {
  args: {
    heading: 'Better for You, Better for the Planet',
    subtitle: 'We believe in providing the highest quality beverages while protecting our natural resources.',
    features: mockFeatures,
  },
};
