import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button, ButtonGroup, ButtonLink, IconButton } from "@repo/ui";

describe("Button system", () => {
    it("prevents interaction when disabled", () => {
        const onClick = vi.fn();

        render(
            <Button disabled onClick={onClick}>
                Save
            </Button>
        );

        const button = screen.getByRole("button", { name: "Save" });

        fireEvent.click(button);
        expect(onClick).toHaveBeenCalledTimes(0);
        expect(button.getAttribute("disabled")).not.toBeNull();
    });

    it("renders anchor when href is provided", () => {
        render(
            <Button href="/docs" target="_blank" rel="noreferrer">
                Docs
            </Button>
        );

        const anchor = screen.getByRole("link", { name: "Docs" });

        expect(anchor.tagName).toBe("A");
        expect(anchor.getAttribute("href")).toBe("/docs");
        expect(anchor.getAttribute("target")).toBe("_blank");
    });

    it("blocks interaction for disabled anchor mode", () => {
        const onClick = vi.fn();

        render(
            <Button href="/account" disabled onClick={onClick}>
                Account
            </Button>
        );

        const anchor = screen.getByText("Account").closest("a");

        expect(anchor).toBeTruthy();
        expect(anchor?.getAttribute("aria-disabled")).toBe("true");
        expect(anchor?.getAttribute("href")).toBeNull();

        if (anchor) {
            fireEvent.click(anchor);
        }

        expect(onClick).toHaveBeenCalledTimes(0);
    });

    it("shows loading spinner and aria busy state", () => {
        render(<Button loading>Submitting</Button>);

        const button = screen.getByRole("button", { name: "Submitting" });
        const spinner = screen.getByTestId("button-spinner");

        expect(spinner).toBeTruthy();
        expect(button.getAttribute("aria-busy")).toBe("true");
        expect(button.getAttribute("disabled")).not.toBeNull();
    });

    it("supports keyboard activation with Enter and Space", () => {
        const onClick = vi.fn();

        render(<Button onClick={onClick}>Keyboard</Button>);

        const button = screen.getByRole("button", { name: "Keyboard" });

        fireEvent.keyDown(button, { key: "Enter" });
        fireEvent.keyUp(button, { key: "Enter" });
        fireEvent.keyDown(button, { key: " " });
        fireEvent.keyUp(button, { key: " " });

        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("exposes link/icon/group wrappers", () => {
        render(
            <ButtonGroup aria-label="actions">
                <ButtonLink href="/account">Account</ButtonLink>
                <IconButton ariaLabel="Favorite">★</IconButton>
            </ButtonGroup>
        );

        expect(screen.getByRole("group", { name: "actions" })).toBeTruthy();
        expect(screen.getByRole("link", { name: "Account" })).toBeTruthy();
        expect(screen.getByRole("button", { name: "Favorite" })).toBeTruthy();
    });

    it("applies full width class when enabled", () => {
        render(<Button fullWidth>Wide</Button>);

        const button = screen.getByRole("button", { name: "Wide" });
        expect(button.className).toContain("w-full");
    });
});
