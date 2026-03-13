import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResponsiveWrapper } from "@repo/ui/layouts/ResponsiveWrapper";

describe("ResponsiveWrapper", () => {
    it("renders children correctly", () => {
        render(
            <ResponsiveWrapper>
                <div>Wrapped content</div>
            </ResponsiveWrapper>
        );

        expect(screen.getByText("Wrapped content")).toBeTruthy();
    });

    it("applies default responsive classes", () => {
        render(
            <ResponsiveWrapper>
                <div>Content</div>
            </ResponsiveWrapper>
        );

        const container = screen.getByTestId("responsive-wrapper-container");

        expect(container.className).toContain("max-w-full");
        expect(container.className).toContain("md:max-w-3xl");
        expect(container.className).toContain("lg:max-w-6xl");
        expect(container.className).toContain("px-4");
        expect(container.className).toContain("md:px-6");
        expect(container.className).toContain("lg:px-8");
    });

    it("shows preview toggle and switches layout modes", () => {
        render(
            <ResponsiveWrapper preview>
                <div>Preview content</div>
            </ResponsiveWrapper>
        );

        const desktopButton = screen.getByRole("button", { name: "Preview Desktop layout" });
        const tabletButton = screen.getByRole("button", { name: "Preview Tablet layout" });
        const mobileButton = screen.getByRole("button", { name: "Preview Mobile layout" });

        expect(desktopButton.getAttribute("aria-pressed")).toBe("true");
        expect(tabletButton.getAttribute("aria-pressed")).toBe("false");
        expect(mobileButton.getAttribute("aria-pressed")).toBe("false");

        fireEvent.click(tabletButton);
        expect(tabletButton.getAttribute("aria-pressed")).toBe("true");

        fireEvent.click(mobileButton);
        expect(mobileButton.getAttribute("aria-pressed")).toBe("true");
    });

    it("changes preview container width based on selected layout mode", () => {
        render(
            <ResponsiveWrapper preview>
                <div>Preview width</div>
            </ResponsiveWrapper>
        );

        const container = screen.getByTestId("responsive-wrapper-container");
        const tabletButton = screen.getByRole("button", { name: "Preview Tablet layout" });
        const mobileButton = screen.getByRole("button", { name: "Preview Mobile layout" });

        expect(container.className).toContain("max-w-[1280px]");

        fireEvent.click(tabletButton);
        expect(container.className).toContain("max-w-[768px]");

        fireEvent.click(mobileButton);
        expect(container.className).toContain("max-w-[375px]");
    });

    it("applies custom wrapper and container classes", () => {
        render(
            <ResponsiveWrapper className="custom-wrapper" containerClassName="custom-container">
                <div>Custom classes</div>
            </ResponsiveWrapper>
        );

        const wrapper = screen.getByText("Custom classes").closest("section");
        const container = screen.getByTestId("responsive-wrapper-container");

        expect(wrapper?.className).toContain("custom-wrapper");
        expect(container.className).toContain("custom-container");
    });
});
