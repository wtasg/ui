import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
import * as React from 'react';

const meta: Meta<typeof Footer> = {
  title: 'Layouts/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const mockColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Case Studies', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

export const Default: Story = {
  args: {
    logo: <div className="text-xl font-bold">REPO UI</div>,
    description: 'Building the next generation of web components with speed and accessibility in mind.',
    columns: mockColumns,
    bottomContent: `© ${new Date().getFullYear()} REPO UI. All rights reserved.`,
  },
};
