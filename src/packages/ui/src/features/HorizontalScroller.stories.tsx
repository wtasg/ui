import type { Meta, StoryObj } from '@storybook/react';
import { HorizontalScroller, HorizontalScrollerTrack, HorizontalScrollerItem } from './HorizontalScroller';
import { Card, CardContent } from '../primitives/Card';
import * as React from 'react';

const meta: Meta<typeof HorizontalScroller> = {
  title: 'Features/HorizontalScroller',
  component: HorizontalScroller,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalScroller>;

export const Default: Story = {
  render: () => (
    <HorizontalScroller className="max-w-xl">
      <HorizontalScrollerTrack>
        {[1, 2, 3, 4, 5].map((i) => (
          <HorizontalScrollerItem key={i}>
            <Card className="flex h-32 w-48 items-center justify-center">
              <CardContent>Item {i}</CardContent>
            </Card>
          </HorizontalScrollerItem>
        ))}
      </HorizontalScrollerTrack>
    </HorizontalScroller>
  ),
};

export const SnapMandatory: Story = {
  render: () => (
    <HorizontalScroller className="max-w-xl">
      <HorizontalScrollerTrack snap="mandatory">
        {[1, 2, 3, 4, 5].map((i) => (
          <HorizontalScrollerItem key={i}>
            <Card className="flex h-32 w-48 items-center justify-center">
              <CardContent>Snap Item {i}</CardContent>
            </Card>
          </HorizontalScrollerItem>
        ))}
      </HorizontalScrollerTrack>
    </HorizontalScroller>
  ),
};
