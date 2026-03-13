import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const dividerVariants = cva("shrink-0 bg-neutral-200", {
    variants: {
        orientation: {
            horizontal: "h-px w-full",
            vertical: "h-full w-px",
        },
        spacing: {
            none: "",
            sm: "",
            default: "",
            lg: "",
        },
    },
    compoundVariants: [
        { orientation: "horizontal", spacing: "sm", class: "my-2" },
        { orientation: "horizontal", spacing: "default", class: "my-4" },
        { orientation: "horizontal", spacing: "lg", class: "my-6" },
        { orientation: "vertical", spacing: "sm", class: "mx-2" },
        { orientation: "vertical", spacing: "default", class: "mx-4" },
        { orientation: "vertical", spacing: "lg", class: "mx-6" },
    ],
    defaultVariants: {
        orientation: "horizontal",
        spacing: "default",
    },
});

export interface DividerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
    decorative?: boolean;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    ({ className, orientation, spacing, decorative = true, ...props }, ref) => (
        <div
            ref={ref}
            role={decorative ? "none" : "separator"}
            aria-orientation={!decorative ? (orientation ?? "horizontal") : undefined}
            className={cn(dividerVariants({ orientation, spacing, className }))}
            {...props}
        />
    )
);
Divider.displayName = "Divider";

export { Divider, dividerVariants };
