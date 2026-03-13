import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'success', 'warning', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['rectangle', 'square', 'round', 'circle', 'squircle', 'link'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    priority: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    priority: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    priority: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Danger: Story = {
  args: {
    priority: 'danger',
    children: 'Danger Button',
  },
};

export const Success: Story = {
  args: {
    priority: 'success',
    children: 'Success Button',
  },
};

export const Warning: Story = {
  args: {
    priority: 'warning',
    children: 'Warning Button',
  },
};

export const Ghost: Story = {
  args: {
    priority: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    priority: 'link',
    children: 'Link Button',
  },
};

export const Loading: Story = {
  args: {
    priority: 'primary',
    loading: true,
    children: 'Loading Button',
  },
};

export const WithIcon: Story = {
  args: {
    priority: 'primary',
    leftIcon: <span>🚀</span>,
    children: 'Icon Button',
  },
};
