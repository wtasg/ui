# Tabs Component

Tabs root component that manages the active state of tab contents.
Built on top of Radix UI Tabs Root.

## Subcomponents & Utilities

### `TabsList`

TabsList acts as the container for trigger buttons.

### `TabsTrigger`

TabsTrigger is the button that activates a specific tab panel.

### `TabsContent`

TabsContent is the container for the content associated with a tab key.

## Usage Example

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@wtasnorg/ui";

function Example() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="docs">Docs</TabsTrigger>
      </TabsList>
      <TabsContent value="preview">Preview content</TabsContent>
      <TabsContent value="code">&lt;Tabs defaultValue="preview"&gt;</TabsContent>
      <TabsContent value="docs">Tabs documentation goes here.</TabsContent>
    </Tabs>
  );
}
```
