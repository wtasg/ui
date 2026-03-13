import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useDisclosure } from "@repo/ui/hooks/useDisclosure";

describe("useDisclosure", () => {
    it("initializes with default closed state", () => {
        const { result } = renderHook(() => useDisclosure());

        expect(result.current.isOpen).toBe(false);
    });

    it("supports open, close, and toggle operations", () => {
        const { result } = renderHook(() => useDisclosure());

        act(() => result.current.open());
        expect(result.current.isOpen).toBe(true);

        act(() => result.current.toggle());
        expect(result.current.isOpen).toBe(false);

        act(() => result.current.onOpenChange(true));
        expect(result.current.isOpen).toBe(true);

        act(() => result.current.close());
        expect(result.current.isOpen).toBe(false);
    });
});
