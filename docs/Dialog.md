# Dialog Component

Dialog root component that controls the overlay visibility state.

## Subcomponents & Utilities

### `DialogTrigger`

DialogTrigger is the button that opens the dialog.

### `DialogClose`

DialogClose is the button that closes the dialog.

### `DialogPortal`

DialogPortal renders the dialog content into a React portal.

### `DialogOverlay`

DialogOverlay provides a semi-transparent backdrop behind the active dialog content.

### `DialogContent`

DialogContent represents the main modal container holding title, body, and action buttons.

### `DialogHeader`

DialogHeader represents the top header section of the modal container.

### `DialogFooter`

DialogFooter represents the bottom footer section containing action buttons.

### `DialogTitle`

DialogTitle provides an accessible label and title for the modal screen.

### `DialogDescription`

DialogDescription provides an accessible helper description for the modal screen content.

## Usage Example

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@wtasnorg/ui";

function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>Open Dialog</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>This is a modal dialog example.</DialogDescription>
        </DialogHeader>
        <div>Modal Body Content</div>
        <DialogFooter>
          <DialogClose asChild>
            <button>Cancel</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```
