import * as React from "react";

/**
 * Hook to manage disclosure state (open/close).
 * Useful for modals, drawers, dropdowns, etc.
 */
export function useDisclosure(defaultOpen = false) {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);

    const open = React.useCallback(() => setIsOpen(true), []);
    const close = React.useCallback(() => setIsOpen(false), []);
    const toggle = React.useCallback(() => setIsOpen((prev) => !prev), []);

    return {
        isOpen,
        open,
        close,
        toggle,
        onOpenChange: setIsOpen,
    } as const;
}
