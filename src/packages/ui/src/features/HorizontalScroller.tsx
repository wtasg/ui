import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const horizontalScrollerTrackVariants = cva("flex min-w-max gap-4", {
    variants: {
        snap: {
            none: "",
            mandatory: "snap-x snap-mandatory",
            proximity: "snap-x snap-proximity",
        },
    },
    defaultVariants: {
        snap: "proximity",
    },
});

export interface HorizontalScrollerProps extends React.HTMLAttributes<HTMLDivElement> {}

const HorizontalScroller = React.forwardRef<HTMLDivElement, HorizontalScrollerProps>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("w-full overflow-x-auto pb-2 [scrollbar-width:thin]", className)}
            {...props}
        />
    )
);

HorizontalScroller.displayName = "HorizontalScroller";

export interface HorizontalScrollerTrackProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof horizontalScrollerTrackVariants> {}

const HorizontalScrollerTrack = React.forwardRef<HTMLDivElement, HorizontalScrollerTrackProps>(
    ({ className, snap, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(horizontalScrollerTrackVariants({ snap, className }))}
            {...props}
        />
    )
);

HorizontalScrollerTrack.displayName = "HorizontalScrollerTrack";

export interface HorizontalScrollerItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const HorizontalScrollerItem = React.forwardRef<HTMLDivElement, HorizontalScrollerItemProps>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("min-w-[240px] shrink-0 snap-start", className)} {...props} />
    )
);

HorizontalScrollerItem.displayName = "HorizontalScrollerItem";

export {
    HorizontalScroller,
    HorizontalScrollerTrack,
    HorizontalScrollerItem,
    horizontalScrollerTrackVariants,
};
