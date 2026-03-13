import type { Meta, StoryObj } from '@storybook/react';
import { ContactUsFeature } from './ContactUsFeature';

const meta: Meta<typeof ContactUsFeature> = {
  title: 'Features/ContactUsFeature',
  component: ContactUsFeature,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContactUsFeature>;

export const Default: Story = {
  args: {
    heading: 'Get in Touch',
    subtitle: 'We are here to help with any questions about our products or services.',
  },
};
