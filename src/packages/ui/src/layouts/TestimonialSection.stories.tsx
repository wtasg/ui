import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialSection } from './TestimonialSection';
import * as React from 'react';

const meta: Meta<typeof TestimonialSection> = {
  title: 'Layouts/TestimonialSection',
  component: TestimonialSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialSection>;

const mockTestimonials = [
  {
    quote: 'This library has transformed our development workflow. The components are beautiful and easy to use.',
    author: 'Sarah Johnson',
    role: 'Senior Engineer at TechCorp',
  },
  {
    quote: 'Repo UI provides the perfect balance of flexibility and performance. Highly recommended.',
    author: 'Michael Chen',
    role: 'Product Designer',
  },
  {
    quote: 'The best React component library I have used in years. Accessibility is top-notch.',
    author: 'Emma Davis',
    role: 'Frontend Lead',
  },
];

export const Default: Story = {
  args: {
    heading: 'What People are Saying',
    subtitle: 'Join hundreds of teams delivering better products with Repo UI.',
    testimonials: mockTestimonials,
  },
};
