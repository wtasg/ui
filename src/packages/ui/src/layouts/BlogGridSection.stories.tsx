import type { Meta, StoryObj } from '@storybook/react';
import { BlogGridSection } from './BlogGridSection';

const meta: Meta<typeof BlogGridSection> = {
  title: 'Layouts/BlogGridSection',
  component: BlogGridSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BlogGridSection>;

const mockPosts = [
  {
    title: 'The Future of Hydration',
    excerpt: 'Discover how smart technology is changing the way we drink water.',
    meta: 'March 15, 2024 • 5 min read',
  },
  {
    title: 'Sustainable Sourcing',
    excerpt: 'Learn about our commitment to eco-friendly harvesting of mountain springs.',
    meta: 'March 10, 2024 • 8 min read',
  },
  {
    title: 'Health Benefits of Tea',
    excerpt: 'Why adding green tea to your daily routine can improve your well-being.',
    meta: 'March 5, 2024 • 6 min read',
  },
];

export const Default: Story = {
  args: {
    heading: 'Latest from our Blog',
    subtitle: 'Stay updated with the newest trends in health and hydration.',
    posts: mockPosts,
  },
};
