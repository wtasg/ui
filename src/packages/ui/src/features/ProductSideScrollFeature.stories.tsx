import type { Meta, StoryObj } from '@storybook/react';
import { ProductSideScrollFeature } from './ProductSideScrollFeature';

const meta: Meta<typeof ProductSideScrollFeature> = {
  title: 'Features/ProductSideScrollFeature',
  component: ProductSideScrollFeature,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProductSideScrollFeature>;

const mockItems = [
  { id: '1', name: 'Sparkling Water', price: '$2.50' },
  { id: '2', name: 'Organic Orange Juice', price: '$4.00' },
  { id: '3', name: 'Iced Green Tea', price: '$3.25' },
  { id: '4', name: 'Classic Cola', price: '$1.75' },
  { id: '5', name: 'Lemonade', price: '$2.75' },
];

export const Default: Story = {
  args: {
    heading: 'Best Sellers',
    subtitle: 'Check out our most popular drinks this month.',
    items: mockItems,
  },
};

export const WithCategories: Story = {
  args: {
    heading: 'Explore Our Range',
    categories: ['All', 'Water', 'Juice', 'Tea', 'Soda'],
    activeCategory: 'All',
    items: mockItems,
  },
};
