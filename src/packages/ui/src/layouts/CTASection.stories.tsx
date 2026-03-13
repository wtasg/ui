import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './CTASection';
import { Button } from '../primitives/Button';
import * as React from 'react';

const meta: Meta<typeof CTASection> = {
  title: 'Layouts/CTASection',
  component: CTASection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CTASection>;

export const Default: Story = {
  args: {
    heading: 'Ready to Experience Pure Refreshment?',
    description: 'Join thousands of satisfied customers who have made the switch to our premium beverages.',
    actions: (
      <>
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </>
    ),
  },
};

export const Gradient: Story = {
  args: {
    heading: 'Stay Refreshed, Stay Healthy',
    description: 'Subscribe to our newsletter and get 15% off your first order.',
    variant: 'gradient',
    actions: <Button size="lg" variant="secondary">Subscribe Now</Button>,
  },
};

export const Dark: Story = {
  args: {
    heading: 'Partner With Us',
    description: 'Grow your business with our world-class beverage distribution network.',
    variant: 'dark',
    actions: <Button size="lg">Contact Sales</Button>,
  },
};
