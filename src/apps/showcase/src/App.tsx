import * as React from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@wtasnorg/ui";

import ButtonDocs from "../../../../docs/Button.md?raw";
import InputDocs from "../../../../docs/Input.md?raw";
import TabsDocs from "../../../../docs/Tabs.md?raw";
import DialogDocs from "../../../../docs/Dialog.md?raw";
import AccordionDocs from "../../../../docs/Accordion.md?raw";

const DOCS_MAP: Record<string, string> = {
  Button: ButtonDocs,
  Input: InputDocs,
  Tabs: TabsDocs,
  Dialog: DialogDocs,
  Accordion: AccordionDocs,
};

const CODE_MAP: Record<string, string> = {
  Button: `import { Button } from "@wtasnorg/ui";\n\n<Button priority="primary" size="default">Save</Button>`,
  Input: `import { Input } from "@wtasnorg/ui";\n\n<Input type="text" placeholder="Enter text..." />`,
  Tabs: `<Tabs defaultValue="preview">\n  <TabsList>\n    <TabsTrigger value="preview">Preview</TabsTrigger>\n    <TabsTrigger value="code">Code</TabsTrigger>\n    <TabsTrigger value="docs">Docs</TabsTrigger>\n  </TabsList>\n  <TabsContent value="preview">Preview content</TabsContent>\n  <TabsContent value="code">&lt;Tabs defaultValue="preview"&gt;</TabsContent>\n  <TabsContent value="docs">Tabs documentation goes here.</TabsContent>\n</Tabs>`,
  Dialog: `<Dialog>\n  <DialogTrigger asChild>\n    <Button>Open Dialog</Button>\n  </DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Example Dialog</DialogTitle>\n      <DialogDescription>This is a dialog.</DialogDescription>\n    </DialogHeader>\n    <DialogFooter>\n      <DialogClose asChild>\n        <Button>Cancel</Button>\n      </DialogClose>\n    </DialogFooter>\n  </DialogContent>\n</Dialog>`,
  Accordion: `<Accordion type="single" collapsible>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Is it accessible?</AccordionTrigger>\n    <AccordionContent>Yes.</AccordionContent>\n  </AccordionItem>\n</Accordion>`,
};

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  return (
    <div className="prose max-w-none text-neutral-600 text-sm space-y-3 font-sans leading-relaxed">
      {lines.map((line, idx) => {
        if (line.startsWith("# ")) {
          return <h3 key={idx} className="text-xl font-extrabold text-neutral-900 border-b pb-1 mb-2 mt-4">{line.replace("# ", "")}</h3>;
        }
        if (line.startsWith("## ")) {
          return <h4 key={idx} className="text-base font-bold text-neutral-800 mt-4 mb-1">{line.replace("## ", "")}</h4>;
        }
        if (line.startsWith("### ")) {
          return <h5 key={idx} className="text-sm font-semibold text-neutral-800 mt-3 mb-1">{line.replace("### ", "")}</h5>;
        }
        if (line.startsWith("```")) {
          return null; // Don't render code block markers
        }
        if (line.trim() === "") return <div key={idx} className="h-1" />;
        return <p key={idx}>{line}</p>;
      })}
    </div>
  );
}

export default function App() {
  const [activeComponent, setActiveComponent] = React.useState<string>("Tabs");

  // Contact Form state
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });
  const [formStatus, setFormStatus] = React.useState<"idle" | "success" | "error">("idle");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.subject === "Please fail once") {
      setFormStatus("error");
    } else {
      setFormStatus("success");
    }
  };

  const handleRetry = () => {
    if (formData.subject === "Please fail once") {
      setFormStatus("error");
    } else {
      setFormStatus("success");
    }
  };

  const handleExplore = () => {
    document.getElementById("components")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewSource = () => {
    document.getElementById("interactive-components")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-soft">
              W
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
              @wtasnorg/ui
            </span>
          </div>
          <nav aria-label="Main" className="flex items-center gap-6">
            <a href="#components" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
              Components
            </a>
            <a href="#contact" className="text-sm font-medium text-neutral-600 hover:text-primary-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content Area containing landmarks */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-6 bg-gradient-to-b from-primary-50/50 via-white to-neutral-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-none">
            A Beautiful <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Component Library</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A premium React component library built with Tailwind CSS v4 and Radix UI. Accessible, customizable, and beautifully styled out of the box.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button priority="primary" size="lg" onClick={handleExplore}>
              Get Started
            </Button>
            <Button priority="secondary" size="lg" onClick={handleExplore}>
              Explore Components
            </Button>
            <Button priority="tertiary" size="lg" onClick={handleViewSource}>
              View Source
            </Button>
            
            {/* Dialog Trigger for tests/E2E */}
            <Dialog>
              <DialogTrigger asChild>
                <Button priority="primary" size="lg">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Example Dialog</DialogTitle>
                  <DialogDescription>This is a custom Radix-backed dialog overlay.</DialogDescription>
                </DialogHeader>
                <div className="py-4 text-sm text-neutral-600">
                  This modal dialog overlays the entire page and locks scroll focus automatically.
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button priority="secondary">Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

        {/* Main Interactive Area */}
        <section id="components" className="max-w-7xl w-full mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-subtle">
                <h2 className="text-xs font-bold text-neutral-600 uppercase tracking-wider px-3 mb-3">
                  Components
                </h2>
                <nav aria-label="Sidebar" className="space-y-1">
                {Object.keys(DOCS_MAP).map(comp => (
                  <button
                    key={comp}
                    onClick={() => setActiveComponent(comp)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                      activeComponent === comp
                        ? "bg-primary-50 text-primary-700 font-semibold"
                        : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                    }`}
                  >
                    {comp}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section id="interactive-components" className="lg:col-span-3 space-y-8">
          <Card variant="default" padding="lg">
            <CardHeader className="border-b border-neutral-100 pb-4 mb-6">
              <CardTitle className="text-3xl font-extrabold text-neutral-900">
                {activeComponent} Showcase
              </CardTitle>
              <CardDescription>
                Demonstrating variations and differences between Native HTML and `@wtasnorg/ui`.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Native vs UI comparison */}
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Comparison (Native vs UI Component)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left Column: Default/Native */}
                  <div className="border border-neutral-200 rounded-lg p-6 bg-neutral-50/50 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <span className="text-xs font-semibold text-neutral-600 uppercase tracking-wider block mb-3">
                        Default / Native HTML
                      </span>
                      <div className="py-4">
                        {activeComponent === "Button" && (
                          <button className="px-4 py-2 bg-gray-200 border rounded hover:bg-gray-300">
                            Native Button
                          </button>
                        )}
                        {activeComponent === "Input" && (
                          <input
                            type="text"
                            placeholder="Native input"
                            className="border p-2 rounded w-full"
                          />
                        )}
                        {activeComponent === "Tabs" && (
                          <div className="border p-4 rounded text-sm text-neutral-600">
                            Native Tabs are not built-in HTML components. They require custom JS/CSS state management.
                          </div>
                        )}
                        {activeComponent === "Dialog" && (
                          <dialog open className="relative block border p-4 rounded bg-white text-sm">
                            Native Dialog element
                          </dialog>
                        )}
                        {activeComponent === "Accordion" && (
                          <details className="border p-3 rounded text-sm">
                            <summary className="cursor-pointer font-medium">Native Summary</summary>
                            <p className="mt-2 text-neutral-500">Native accordion details content.</p>
                          </details>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-neutral-600 italic mt-4">Unstyled default styling</span>
                  </div>

                  {/* Right Column: UI Component */}
                  <div className="border border-primary-200 rounded-lg p-6 bg-primary-50/10 flex flex-col justify-between min-h-[160px] shadow-soft">
                    <div>
                      <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider block mb-3">
                        @wtasnorg/ui Component
                      </span>
                      <div className="py-4">
                        {activeComponent === "Button" && (
                          <Button priority="primary" size="default">
                            UI Button
                          </Button>
                        )}
                        {activeComponent === "Input" && (
                          <Input type="text" placeholder="UI library input" />
                        )}
                        {activeComponent === "Tabs" && (
                          <Tabs defaultValue="preview">
                            <TabsList>
                              <TabsTrigger value="preview">Preview</TabsTrigger>
                              <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
                            </TabsList>
                            <TabsContent value="preview">
                              <span className="text-sm text-neutral-600">Beautiful Tabs component content.</span>
                            </TabsContent>
                          </Tabs>
                        )}
                        {activeComponent === "Dialog" && (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button priority="primary">Open Dialog</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Example Dialog</DialogTitle>
                                <DialogDescription>This is a custom Radix-backed dialog overlay.</DialogDescription>
                              </DialogHeader>
                              <div className="py-4 text-sm text-neutral-600">
                                This modal dialog overlays the entire page and locks scroll focus automatically.
                              </div>
                              <DialogFooter>
                                <DialogClose asChild>
                                  <Button priority="secondary">Cancel</Button>
                                </DialogClose>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        )}
                        {activeComponent === "Accordion" && (
                          <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                              <AccordionTrigger>Is it animated?</AccordionTrigger>
                              <AccordionContent>
                                Yes. It contains smooth slide-down and slide-up animations.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-primary-600 font-medium mt-4">Premium styled out of the box</span>
                  </div>
                </div>
              </div>

              {/* Variations */}
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-4">Different Variations</h3>
                <div className="border border-neutral-200 rounded-lg p-6 bg-white space-y-4">
                  {activeComponent === "Button" && (
                    <div className="flex flex-wrap gap-3 items-center">
                      <Button priority="primary">Primary</Button>
                      <Button priority="secondary">Secondary</Button>
                      <Button priority="tertiary">Tertiary</Button>
                      <Button priority="danger" variant="danger">Danger</Button>
                      <Button priority="primary" loading>Loading</Button>
                      <Button priority="primary" disabled>Disabled</Button>
                    </div>
                  )}
                  {activeComponent === "Input" && (
                    <div className="space-y-3 max-w-sm">
                      <Input type="text" placeholder="Default size" />
                      <Input type="text" placeholder="Small size" inputSize="sm" />
                      <Input type="text" placeholder="Large size" inputSize="lg" />
                      <Input type="text" placeholder="Error state" variant="error" />
                    </div>
                  )}
                  {activeComponent === "Tabs" && (
                    <div className="space-y-4">
                      <Tabs defaultValue="tab1">
                        <TabsList>
                          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        </TabsList>
                        <TabsContent value="tab1" className="p-4 border rounded bg-neutral-50 text-sm">
                          Content pane 1
                        </TabsContent>
                        <TabsContent value="tab2" className="p-4 border rounded bg-neutral-50 text-sm">
                          Content pane 2
                        </TabsContent>
                      </Tabs>
                    </div>
                  )}
                  {activeComponent === "Dialog" && (
                    <div className="flex gap-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button priority="secondary">Interactive Dialog Trigger</Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Example Dialog</DialogTitle>
                            <DialogDescription>Interactive dialog box</DialogDescription>
                          </DialogHeader>
                          <div className="py-2 text-sm">Click cancel below to close.</div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button priority="secondary">Cancel</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                  {activeComponent === "Accordion" && (
                    <Accordion type="multiple" className="w-full">
                      <AccordionItem value="acc-1">
                        <AccordionTrigger>First section</AccordionTrigger>
                        <AccordionContent>First content</AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="acc-2">
                        <AccordionTrigger>Second section</AccordionTrigger>
                        <AccordionContent>Second content</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </div>
              </div>

              {/* Code & Docs tabs */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Tabs defaultValue="preview">
                  <TabsList className="mb-4">
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="docs">Docs</TabsTrigger>
                  </TabsList>

                  <TabsContent value="preview" className="p-4 border rounded-lg bg-neutral-50 text-sm text-neutral-600">
                    Interact with the showcased components in the preview cards above.
                  </TabsContent>

                  <TabsContent value="code">
                    <div className="p-4 border rounded-lg bg-neutral-900 text-neutral-100 font-mono text-xs whitespace-pre overflow-x-auto">
                      {CODE_MAP[activeComponent]}
                    </div>
                  </TabsContent>

                  <TabsContent value="docs" className="p-6 border rounded-lg bg-white overflow-y-auto max-h-[300px]">
                    <MarkdownRenderer content={DOCS_MAP[activeComponent] || "No documentation found."} />
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </section>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="max-w-3xl w-full mx-auto px-6 py-20">
        <Card variant="default" padding="lg" className="border-primary-100 shadow-heavy">
          <CardHeader className="text-center space-y-2 mb-6">
            <CardTitle className="text-3xl font-extrabold text-neutral-900">
              Get In Touch
            </CardTitle>
            <CardDescription>
              Submit this contact form to verify validation and API error states.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {formStatus === "success" ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg p-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-bold text-lg">Submission Successful</h3>
                <p className="text-sm">Your message has been sent successfully.</p>
                <Button priority="secondary" onClick={() => setFormStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {formStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 text-center text-sm font-medium">
                    Failed to send message. Please try again.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="form-name" className="text-sm font-medium text-neutral-900 block">
                      Name
                    </label>
                    <Input
                      id="form-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="form-email" className="text-sm font-medium text-neutral-900 block">
                      Email
                    </label>
                    <Input
                      id="form-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-subject" className="text-sm font-medium text-neutral-900 block">
                    Subject
                  </label>
                  <Input
                    id="form-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleFormChange}
                    placeholder="Subject of inquiry"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="form-message" className="text-sm font-medium text-neutral-900 block">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Type your message here..."
                    className="flex w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm transition placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="form-agree"
                    name="agree"
                    type="checkbox"
                    required
                    checked={formData.agree}
                    onChange={handleFormChange}
                    className="mt-1 h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                  <label htmlFor="form-agree" className="text-sm text-neutral-600">
                    I agree to be contacted regarding my inquiry.
                  </label>
                </div>

                <Button priority="primary" type="submit" fullWidth>
                  {formStatus === "error" ? "Retry" : "Send Message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-neutral-600">
          © {new Date().getFullYear()} @wtasnorg/ui. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
