import type { Meta, StoryObj } from '@storybook/react';
import { CardGridSection } from './CardGridSection';
import { Card, CardHeader, CardTitle, CardContent } from '../primitives/Card';
import * as React from 'react';

const meta: Meta<typeof CardGridSection> = {
  title: 'Layouts/CardGridSection',
  component: CardGridSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CardGridSection>;

export const ThreeColumns: Story = {
  args: {
    heading: 'Our Core Values',
    subtitle: 'What drives us to deliver the best quality every single day.',
    columns: 3,
  },
  render: (args) => (
    <CardGridSection {...args}>
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Value {i}</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </CardContent>
        </Card>
      ))}
    </CardGridSection>
  ),
};

export const TwoColumns: Story = {
  args: {
    heading: 'Featured Services',
    columns: 2,
  },
  render: (args) => (
    <CardGridSection {...args}>
      {[1, 2].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Service {i}</CardTitle>
          </CardHeader>
          <CardContent>
            Detailed description of service {i} and how it benefits our premium customers.
          </CardContent>
        </Card>
      ))}
    </CardGridSection>
  ),
};
