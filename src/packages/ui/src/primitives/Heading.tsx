import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const headingVariants = cva("font-bold tracking-tight text-neutral-900", {
    variants: {
        size: {
            xs: "text-lg",
            sm: "text-xl",
            default: "text-2xl",
            lg: "text-3xl md:text-4xl",
            xl: "text-4xl md:text-5xl",
            "2xl": "text-5xl md:text-6xl",
        },
    },
    defaultVariants: {
        size: "default",
    },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    as?: HeadingElement;
    asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, size, as: Tag = "h2", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : Tag;
        return (
            <Comp
                ref={ref as React.Ref<never>}
                className={cn(headingVariants({ size, className }))}
                {...props}
            />
        );
    }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
