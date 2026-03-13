import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const textVariants = cva("", {
    variants: {
        size: {
            xs: "text-xs",
            sm: "text-sm",
            default: "text-base",
            lg: "text-lg",
            xl: "text-xl",
        },
        weight: {
            light: "font-light",
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        color: {
            default: "text-neutral-900",
            muted: "text-neutral-500",
            primary: "text-primary-600",
            accent: "text-accent-600",
            inherit: "text-inherit",
        },
        leading: {
            tight: "leading-tight",
            normal: "leading-normal",
            relaxed: "leading-relaxed",
        },
    },
    defaultVariants: {
        size: "default",
        weight: "normal",
        color: "default",
        leading: "normal",
    },
});

export interface TextProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof textVariants> {
    as?: "p" | "span" | "div" | "label" | "small" | "strong" | "em";
    asChild?: boolean;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
    (
        { className, size, weight, color, leading, as: Tag = "p", asChild = false, ...props },
        ref
    ) => {
        const Comp = asChild ? Slot : Tag;
        return (
            <Comp
                ref={ref as React.Ref<never>}
                className={cn(textVariants({ size, weight, color, leading, className }))}
                {...props}
            />
        );
    }
);
Text.displayName = "Text";

export { Text, textVariants };
