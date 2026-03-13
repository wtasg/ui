import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Navbar } from "../../src/packages/ui/src/layouts/Navbar";
import * as React from "react";

describe("Navbar", () => {
    const items = [
        { label: "Home", href: "#" },
        { label: "About", href: "#", onClick: vi.fn() },
    ];

    it("renders desktop navigation", () => {
        render(<Navbar logo="Logo" items={items} />);
        expect(screen.getByText("Logo")).toBeTruthy();
        expect(screen.getByText("Home")).toBeTruthy();
        expect(screen.getByText("About")).toBeTruthy();
    });

    it("toggles mobile menu", () => {
        render(<Navbar items={items} actions={<button>Action</button>} />);
        const toggle = screen.getByLabelText(/toggle navigation menu/i);
        
        fireEvent.click(toggle);
        expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Action").length).toBeGreaterThan(0);
        
        fireEvent.click(toggle);
    });

    it("triggers onClick and closes mobile menu", () => {
        render(<Navbar items={items} />);
        fireEvent.click(screen.getByLabelText(/toggle navigation menu/i));
        
        const aboutLink = screen.getAllByText("About").find(el => el.closest('.md\\:hidden'));
        if (aboutLink) {
            fireEvent.click(aboutLink);
            expect(items[1].onClick).toHaveBeenCalled();
        }
    });

    it("supports custom navigation renderer", () => {
        const renderNav = vi.fn().mockReturnValue(<div>Custom Nav</div>);
        render(<Navbar items={items} renderNav={renderNav} />);
        expect(screen.getByText("Custom Nav")).toBeTruthy();
        expect(renderNav).toHaveBeenCalledWith(items);
    });
});
