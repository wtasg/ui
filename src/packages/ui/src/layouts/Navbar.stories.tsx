import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button } from '../primitives/Button';
import * as React from 'react';

const meta: Meta<typeof Navbar> = {
  title: 'Layouts/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const mockItems = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Default: Story = {
  args: {
    logo: <div className="text-xl font-bold">REPO UI</div>,
    items: mockItems,
    actions: <Button size="sm">Get Started</Button>,
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  args: {
    logo: <div className="text-xl font-bold">REPO UI</div>,
    items: mockItems,
    actions: <Button size="sm">Get Started</Button>,
  },
};
