import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';
import { Button } from '../primitives/Button';
import * as React from 'react';

const meta: Meta<typeof HeroSection> = {
  title: 'Layouts/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    heading: 'Design Faster with Repo UI',
    subtitle: 'A comprehensive component library built for speed, accessibility, and stellar aesthetics.',
    actions: (
      <>
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">Browse Components</Button>
      </>
    ),
  },
};

export const LeftAligned: Story = {
  args: {
    heading: 'Premium Web Experiences',
    subtitle: 'We craft digital solutions that stand out and drive growth for your business.',
    align: 'left',
    actions: <Button size="lg">View Portfolio</Button>,
  },
};
