# @wtasnorg/ui

A reusable React component library built with TypeScript, Tailwind CSS v4, and Radix UI primitives.

Repository: <https://github.com/wtasg/ui>

## Install

```bash
npm install @wtasnorg/ui
```

Peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Quick Start

Import the package styles once in your application entry:

```ts
import "@wtasnorg/ui/styles.css";
```

Use components from the package root:

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from "@wtasnorg/ui";

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>UI Kit</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## Tailwind Setup

Make sure your app's Tailwind content globs include this package so utility classes are discovered:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@wtasnorg/ui/dist/**/*.{js,cjs}"
  ]
};

export default config;
```

## Package Outputs

- `dist/index.js` - ESM
- `dist/index.cjs` - CommonJS
- `dist/index.d.ts` - Type declarations
- `dist/index.css` - Stylesheet, re-exported as `@wtasnorg/ui/styles.css`

## Development

```bash
npm install
npm run typecheck
npm run test
npm run build
```

## License

MIT
