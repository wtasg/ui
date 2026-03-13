import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveWrapper } from './ResponsiveWrapper';
import * as React from 'react';

const meta: Meta<typeof ResponsiveWrapper> = {
  title: 'Layouts/ResponsiveWrapper',
  component: ResponsiveWrapper,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ResponsiveWrapper>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-white p-6 shadow-sm border border-neutral-200 rounded-lg">
        <h3 className="text-lg font-bold mb-4">Responsive Content</h3>
        <p>This content scales based on the layout mode or screen size.</p>
      </div>
    ),
  },
};

export const Preview: Story = {
  args: {
    preview: true,
    previewLabel: "Test responsive widths",
    children: (
      <div className="bg-indigo-50 p-12 text-center border-2 border-indigo-200 rounded-xl">
        <p className="font-medium text-indigo-900">Try clicking the layout buttons above!</p>
      </div>
    ),
  },
};
