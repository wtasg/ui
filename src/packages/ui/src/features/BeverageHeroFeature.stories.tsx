import type { Meta, StoryObj } from '@storybook/react';
import { BeverageHeroFeature } from './BeverageHeroFeature';

const meta: Meta<typeof BeverageHeroFeature> = {
  title: 'Features/BeverageHeroFeature',
  component: BeverageHeroFeature,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BeverageHeroFeature>;

export const Default: Story = {
  args: {
    heading: 'The Purest Water from the Heart of the Mountains',
    description: 'Experience the crisp, refreshing taste of nature. Bottled at the source and delivered to your doorstep.',
  },
};

export const MutedBackground: Story = {
  args: {
    heading: 'Sustainable Energy for Your Daily Life',
    description: 'Our organic energy drinks provide a natural boost without the crash.',
    background: 'muted',
  },
};

export const PrimaryBackground: Story = {
  args: {
    heading: 'Join the Refreshment Revolution',
    description: 'Subscribe now and save 20% on your first order of premium juices.',
    background: 'primary',
  },
};
