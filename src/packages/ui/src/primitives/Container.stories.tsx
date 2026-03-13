import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import * as React from 'react';

const meta: Meta<typeof Container> = {
  title: 'Primitives/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-neutral-100 p-8 text-center border-2 border-dashed border-neutral-300 rounded-lg">
        Container Content (xl default)
      </div>
    ),
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: <div className="bg-blue-50 p-4 border border-blue-200">Small Container</div>,
  },
};

export const Full: Story = {
  args: {
    size: 'full',
    children: <div className="bg-green-50 p-4 border border-green-200">Full Width Container</div>,
  },
};
