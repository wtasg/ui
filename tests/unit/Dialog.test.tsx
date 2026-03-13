import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from "../../src/packages/ui/src/components/Dialog";
import { Button } from "../../src/packages/ui/src/primitives/Button";
import * as React from "react";

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

describe("Dialog", () => {
    it("renders and opens on trigger click", async () => {
        render(
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Title</DialogTitle>
                        <DialogDescription>Description</DialogDescription>
                    </DialogHeader>
                    <div>Content</div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button>Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );

        fireEvent.click(screen.getByText("Open Dialog"));
        expect(await screen.findByText("Title")).toBeTruthy();
        expect(screen.getByText("Description")).toBeTruthy();
        expect(screen.getByText("Content")).toBeTruthy();
    });
});
