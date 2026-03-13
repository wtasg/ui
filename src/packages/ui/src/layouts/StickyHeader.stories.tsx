import type { Meta, StoryObj } from '@storybook/react';
import { StickyHeader } from './StickyHeader';
import * as React from 'react';

const meta: Meta<typeof StickyHeader> = {
  title: 'Layouts/StickyHeader',
  component: StickyHeader,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof StickyHeader>;

export const Default: Story = {
  args: {
    brand: <div className="font-bold">MY BRAND</div>,
    navigation: <div className="flex gap-4"><span>Home</span><span>Product</span><span>About</span></div>,
    breadcrumbs: <span>Dashboard / Settings</span>,
    account: <span>User Profile</span>,
    collapsed: false,
  },
};
export const NoNavigation: Story = {
    args: {
        brand: <div className="font-bold">BRAND</div>,
        sticky: false,
    },
};

export const Collapsed: Story = {
  args: {
    brand: <div className="font-bold">MY BRAND</div>,
    navigation: <div className="flex gap-4"><span>Home</span><span>Product</span><span>About</span></div>,
    collapsed: true,
  },
};
