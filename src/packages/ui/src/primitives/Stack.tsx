import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const stackVariants = cva("flex", {
    variants: {
        direction: {
            vertical: "flex-col",
            horizontal: "flex-row",
        },
        align: {
            start: "items-start",
            center: "items-center",
            end: "items-end",
            stretch: "items-stretch",
            baseline: "items-baseline",
        },
        justify: {
            start: "justify-start",
            center: "justify-center",
            end: "justify-end",
            between: "justify-between",
            around: "justify-around",
            evenly: "justify-evenly",
        },
        gap: {
            none: "gap-0",
            xs: "gap-1",
            sm: "gap-2",
            default: "gap-4",
            lg: "gap-6",
            xl: "gap-8",
            "2xl": "gap-12",
        },
        wrap: {
            true: "flex-wrap",
            false: "flex-nowrap",
        },
    },
    defaultVariants: {
        direction: "vertical",
        gap: "default",
        wrap: false,
    },
});

export interface StackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> { }

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
    ({ className, direction, align, justify, gap, wrap, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                stackVariants({ direction, align, justify, gap, wrap, className })
            )}
            {...props}
        />
    )
);
Stack.displayName = "Stack";

export { Stack, stackVariants };
