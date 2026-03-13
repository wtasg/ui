import type { Meta, StoryObj } from '@storybook/react';
import { Section } from './Section';
import { Heading } from './Heading';
import { Text } from './Text';
import { Container } from './Container';

const meta: Meta<typeof Section> = {
  title: 'Primitives/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    spacing: {
      control: 'select',
      options: ['none', 'sm', 'default', 'lg', 'xl'],
    },
    background: {
      control: 'select',
      options: ['default', 'muted', 'primary', 'accent', 'dark'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    spacing: 'lg',
    background: 'default',
  },
  render: (args) => (
    <Section {...args}>
      <Container>
        <Heading as="h2" size="xl" className="mb-4">Section Heading</Heading>
        <Text> This is a standard section with large vertical spacing and a default background.</Text>
      </Container>
    </Section>
  ),
};

export const Muted: Story = {
  args: {
    spacing: 'lg',
    background: 'muted',
  },
  render: (args) => (
    <Section {...args}>
      <Container>
        <Heading as="h2" size="xl" className="mb-4">Muted Section</Heading>
        <Text>This section has a subtle muted background to help separate content areas.</Text>
      </Container>
    </Section>
  ),
};
