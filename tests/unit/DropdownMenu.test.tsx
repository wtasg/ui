import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from "../../src/packages/ui/src/components/DropdownMenu";
import { Button } from "../../src/packages/ui/src/primitives/Button";
import * as React from "react";

// Mock ResizeObserver which is used by Radix UI
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

describe("DropdownMenu", () => {
    it("renders when open", () => {
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuItem>Item 1</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("Item 1")).toBeTruthy();
    });

    it("handles checkbox items", async () => {
        const onCheckedChange = vi.fn();
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuCheckboxItem checked={true} onCheckedChange={onCheckedChange}>
                        Checkbox Item
                    </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        const item = screen.getByText("Checkbox Item");
        fireEvent.click(item);
        expect(onCheckedChange).toHaveBeenCalledWith(false);
    });

    it("handles radio items", async () => {
        const onValueChange = vi.fn();
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuRadioGroup value="one" onValueChange={onValueChange}>
                        <DropdownMenuRadioItem value="one">Option One</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="two">Option Two</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        fireEvent.click(screen.getByText("Option Two"));
        expect(onValueChange).toHaveBeenCalledWith("two");
    });

    it("renders submenus", async () => {
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuSub open={true}>
                        <DropdownMenuSubTrigger>Sub Trigger</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Sub Item</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("Sub Trigger")).toBeTruthy();
        expect(screen.getByText("Sub Item")).toBeTruthy();
    });

    it("renders labels", () => {
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Group Label</DropdownMenuLabel>
                    <DropdownMenuItem>Item</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("Group Label")).toBeTruthy();
    });

    it("renders with inset", () => {
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuLabel inset>Inset Label</DropdownMenuLabel>
                    <DropdownMenuItem inset>Inset Item</DropdownMenuItem>
                    <DropdownMenuSub open={true}>
                        <DropdownMenuSubTrigger inset>Inset Sub</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                             <DropdownMenuSubContent>
                                <DropdownMenuItem>Sub Item</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("Inset Label")).toBeTruthy();
        expect(screen.getByText("Inset Item")).toBeTruthy();
        expect(screen.getByText("Inset Sub")).toBeTruthy();
    });

    it("renders shortcuts and separators", () => {
        render(
            <DropdownMenu open={true}>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Save <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Exit</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );

        expect(screen.getByText("⌘S")).toBeTruthy();
    });
});
