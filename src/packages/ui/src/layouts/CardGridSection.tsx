import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

const cardGridSectionVariants = cva("w-full", {
    variants: {
        spacing: {
            sm: "py-8 md:py-12",
            default: "py-12 md:py-16",
            lg: "py-16 md:py-24",
        },
        columns: {
            2: "",
            3: "",
            4: "",
        },
    },
    defaultVariants: {
        spacing: "default",
        columns: 3,
    },
});

export interface CardGridSectionProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof cardGridSectionVariants> {
    /** Section heading */
    heading?: React.ReactNode;
    /** Section subtitle */
    subtitle?: React.ReactNode;
}

const CardGridSection = React.forwardRef<HTMLElement, CardGridSectionProps>(
    ({ className, heading, subtitle, columns, spacing, children, ...props }, ref) => {
        const gridCols = {
            2: "sm:grid-cols-2",
            3: "sm:grid-cols-2 lg:grid-cols-3",
            4: "sm:grid-cols-2 lg:grid-cols-4",
        };

        return (
            <section
                ref={ref}
                className={cn(cardGridSectionVariants({ spacing, columns, className }))}
                {...props}
            >
                <Container>
                    {(heading || subtitle) && (
                        <div className="mb-12 text-center">
                            {heading && (
                                <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                                    {heading}
                                </h2>
                            )}
                            {subtitle && (
                                <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
                            )}
                        </div>
                    )}
                    <div className={cn("grid grid-cols-1 gap-6", gridCols[columns ?? 3])}>
                        {children}
                    </div>
                </Container>
            </section>
        );
    }
);
CardGridSection.displayName = "CardGridSection";

export { CardGridSection, cardGridSectionVariants };
