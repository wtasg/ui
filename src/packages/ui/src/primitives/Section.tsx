import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const sectionVariants = cva("w-full", {
    variants: {
        spacing: {
            none: "",
            sm: "py-8 md:py-12",
            default: "py-12 md:py-16",
            lg: "py-16 md:py-24",
            xl: "py-24 md:py-32",
        },
        background: {
            default: "bg-white",
            muted: "bg-neutral-50",
            primary: "bg-primary-50",
            accent: "bg-accent-50",
            dark: "bg-neutral-900 text-white",
        },
    },
    defaultVariants: {
        spacing: "default",
        background: "default",
    },
});

export interface SectionProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
    as?: "section" | "div" | "article" | "aside";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, spacing, background, as: Tag = "section", ...props }, ref) => (
        <Tag
            ref={ref as React.Ref<never>}
            className={cn(sectionVariants({ spacing, background, className }))}
            {...props}
        />
    )
);
Section.displayName = "Section";

export { Section, sectionVariants };
