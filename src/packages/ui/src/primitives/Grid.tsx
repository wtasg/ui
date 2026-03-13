import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const gridVariants = cva("grid", {
    variants: {
        cols: {
            1: "grid-cols-1",
            2: "grid-cols-1 sm:grid-cols-2",
            3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
            4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
            5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
            6: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
        },
        gap: {
            none: "gap-0",
            sm: "gap-3",
            default: "gap-6",
            lg: "gap-8",
            xl: "gap-12",
        },
    },
    defaultVariants: {
        cols: 3,
        gap: "default",
    },
});

export interface GridProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> { }

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
    ({ className, cols, gap, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(gridVariants({ cols, gap, className }))}
            {...props}
        />
    )
);
Grid.displayName = "Grid";

export { Grid, gridVariants };
