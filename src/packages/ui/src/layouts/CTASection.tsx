import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

const ctaSectionVariants = cva("w-full", {
    variants: {
        variant: {
            default: "bg-primary-600 text-white",
            outline: "border-y border-neutral-200 bg-white text-neutral-900",
            dark: "bg-neutral-900 text-white",
            gradient:
                "bg-gradient-to-r from-primary-600 to-accent-600 text-white",
        },
        spacing: {
            sm: "py-8 md:py-12",
            default: "py-12 md:py-16",
            lg: "py-16 md:py-24",
        },
    },
    defaultVariants: {
        variant: "default",
        spacing: "default",
    },
});

export interface CTASectionProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof ctaSectionVariants> {
    /** CTA heading */
    heading?: React.ReactNode;
    /** CTA description */
    description?: React.ReactNode;
    /** Action buttons */
    actions?: React.ReactNode;
}

const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
    (
        { className, heading, description, actions, variant, spacing, children, ...props },
        ref
    ) => (
        <section
            ref={ref}
            className={cn(ctaSectionVariants({ variant, spacing, className }))}
            {...props}
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    {heading && (
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {heading}
                        </h2>
                    )}
                    {description && (
                        <p className="mt-4 text-lg opacity-90">{description}</p>
                    )}
                    {actions && (
                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            {actions}
                        </div>
                    )}
                    {children}
                </div>
            </Container>
        </section>
    )
);
CTASection.displayName = "CTASection";

export { CTASection, ctaSectionVariants };
