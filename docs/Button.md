# Button Component

Button component for triggering actions or navigating to links.
Supports different shapes, priorities, sizes, icons, and loading states.

## Subcomponents & Utilities

### `ButtonLink`

ButtonLink component that acts as a wrapper around Button specifically optimized for links.

### `IconButton`

IconButton renders a button enclosing a single icon with a defaults circular shape.

### `ButtonGroup`

ButtonGroup groups multiple buttons together in a contiguous flex container.

## Usage Example

```tsx
import { Button, ButtonGroup } from "@wtasnorg/ui";

function Example() {
  return (
    <ButtonGroup>
      <Button priority="primary" size="default">Save</Button>
      <Button priority="secondary" size="default">Cancel</Button>
    </ButtonGroup>
  );
}
```
