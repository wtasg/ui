import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT_DIR, "docs");

// Component source files we want to document
const FILES_TO_DOC = [
  { name: "Button", path: "src/packages/ui/src/primitives/Button.tsx" },
  { name: "Input", path: "src/packages/ui/src/primitives/Input.tsx" },
  { name: "Tabs", path: "src/packages/ui/src/components/Tabs.tsx" },
  { name: "Dialog", path: "src/packages/ui/src/components/Dialog.tsx" },
  { name: "Accordion", path: "src/packages/ui/src/components/Accordion.tsx" },
];

function cleanJSDoc(comment) {
  return comment
    .split("\n")
    .map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith("/**") || trimmed.startsWith("*/")) {
        return "";
      }
      return trimmed.replace(/^\*\s?/, "");
    })
    .filter(line => line !== "")
    .join("\n");
}

function generateMarkdown() {
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }

  for (const item of FILES_TO_DOC) {
    const filePath = path.join(ROOT_DIR, item.path);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    
    // Regex to match: /** JSDoc */ followed by const/function/interface Name
    const regex = /\/\*\*([\s\S]*?)\*\/\s*(?:export\s+)?(?:const|function|interface|class|let|var)\s+(\w+)/g;
    let match;
    const documentations = [];

    while ((match = regex.exec(content)) !== null) {
      const commentRaw = match[1];
      const name = match[2];
      const cleanedComment = cleanJSDoc(commentRaw);
      documentations.push({ name, description: cleanedComment });
    }

    if (documentations.length === 0) {
      console.log(`No JSDoc found in ${item.name}`);
      continue;
    }

    // Determine the main component documentation
    const mainDoc = documentations.find(d => d.name === item.name) || documentations[0];
    const subDocs = documentations.filter(d => d.name !== mainDoc.name);

    let md = `# ${item.name} Component\n\n`;
    md += `${mainDoc.description}\n\n`;

    if (subDocs.length > 0) {
      md += `## Subcomponents & Utilities\n\n`;
      for (const sub of subDocs) {
        md += `### \`${sub.name}\`\n\n`;
        md += `${sub.description}\n\n`;
      }
    }

    // Add usage example based on component
    md += `## Usage Example\n\n`;
    md += "```tsx\n";
    if (item.name === "Button") {
      md += `import { Button, ButtonGroup } from "@wtasnorg/ui";\n\n`;
      md += `function Example() {\n`;
      md += `  return (\n`;
      md += `    <ButtonGroup>\n`;
      md += `      <Button priority="primary" size="default">Save</Button>\n`;
      md += `      <Button priority="secondary" size="default">Cancel</Button>\n`;
      md += `    </ButtonGroup>\n`;
      md += `  );\n`;
      md += `}\n`;
    } else if (item.name === "Input") {
      md += `import { Input } from "@wtasnorg/ui";\n\n`;
      md += `function Example() {\n`;
      md += `  return <Input type="text" placeholder="Enter your name..." />;\n`;
      md += `}\n`;
    } else if (item.name === "Tabs") {
      md += `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@wtasnorg/ui";\n\n`;
      md += `function Example() {\n`;
      md += `  return (\n`;
      md += `    <Tabs defaultValue="preview">\n`;
      md += `      <TabsList>\n`;
      md += `        <TabsTrigger value="preview">Preview</TabsTrigger>\n`;
      md += `        <TabsTrigger value="code">Code</TabsTrigger>\n`;
      md += `        <TabsTrigger value="docs">Docs</TabsTrigger>\n`;
      md += `      </TabsList>\n`;
      md += `      <TabsContent value="preview">Preview content</TabsContent>\n`;
      md += `      <TabsContent value="code">&lt;Tabs defaultValue="preview"&gt;</TabsContent>\n`;
      md += `      <TabsContent value="docs">Tabs documentation goes here.</TabsContent>\n`;
      md += `    </Tabs>\n`;
      md += `  );\n`;
      md += `}\n`;
    } else if (item.name === "Dialog") {
      md += `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@wtasnorg/ui";\n\n`;
      md += `function Example() {\n`;
      md += `  return (\n`;
      md += `    <Dialog>\n`;
      md += `      <DialogTrigger asChild>\n`;
      md += `        <button>Open Dialog</button>\n`;
      md += `      </DialogTrigger>\n`;
      md += `      <DialogContent>\n`;
      md += `        <DialogHeader>\n`;
      md += `          <DialogTitle>Example Dialog</DialogTitle>\n`;
      md += `          <DialogDescription>This is a modal dialog example.</DialogDescription>\n`;
      md += `        </DialogHeader>\n`;
      md += `        <div>Modal Body Content</div>\n`;
      md += `        <DialogFooter>\n`;
      md += `          <DialogClose asChild>\n`;
      md += `            <button>Cancel</button>\n`;
      md += `          </DialogClose>\n`;
      md += `        </DialogFooter>\n`;
      md += `      </DialogContent>\n`;
      md += `    </Dialog>\n`;
      md += `  );\n`;
      md += `}\n`;
    } else if (item.name === "Accordion") {
      md += `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@wtasnorg/ui";\n\n`;
      md += `function Example() {\n`;
      md += `  return (\n`;
      md += `    <Accordion type="single" collapsible>\n`;
      md += `      <AccordionItem value="item-1">\n`;
      md += `        <AccordionTrigger>Is it accessible?</AccordionTrigger>\n`;
      md += `        <AccordionContent>\n`;
      md += `          Yes. It adheres to the WAI-ARIA design pattern.\n`;
      md += `        </AccordionContent>\n`;
      md += `      </AccordionItem>\n`;
      md += `    </Accordion>\n`;
      md += `  );\n`;
      md += `}\n`;
    }
    md += "```\n";

    const outPath = path.join(DOCS_DIR, `${item.name}.md`);
    fs.writeFileSync(outPath, md, "utf-8");
    console.log(`Generated docs: ${outPath}`);
  }
}

generateMarkdown();
