# Accordion Component

Accordion component for displaying collapsible content panels.
Built on top of Radix UI Accordion Root.

## Subcomponents & Utilities

### `AccordionItem`

AccordionItem represents a single collapsible section item in the accordion.

### `AccordionTrigger`

AccordionTrigger is the header button that toggles the expansion of its associated content panel.

### `AccordionContent`

AccordionContent contains the expandable/collapsible body text or widgets.

## Usage Example

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@wtasnorg/ui";

function Example() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```
