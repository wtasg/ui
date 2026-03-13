import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

const featureSectionVariants = cva("w-full", {
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

export interface FeatureItem {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
}

export interface FeatureSectionProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof featureSectionVariants> {
    /** Section heading */
    heading?: React.ReactNode;
    /** Section subtitle */
    subtitle?: React.ReactNode;
    /** Array of feature items */
    features?: FeatureItem[];
}

const FeatureSection = React.forwardRef<HTMLElement, FeatureSectionProps>(
    (
        { className, heading, subtitle, features, columns, spacing, children, ...props },
        ref
    ) => {
        const gridCols = {
            2: "sm:grid-cols-2",
            3: "sm:grid-cols-2 lg:grid-cols-3",
            4: "sm:grid-cols-2 lg:grid-cols-4",
        };

        return (
            <section
                ref={ref}
                className={cn(featureSectionVariants({ spacing, columns, className }))}
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
                    {features && features.length > 0 && (
                        <div className={cn("grid grid-cols-1 gap-8", gridCols[columns ?? 3])}>
                            {features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    {feature.icon && (
                                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                                            {feature.icon}
                                        </div>
                                    )}
                                    <h3 className="mb-2 text-lg font-semibold text-neutral-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {children}
                </Container>
            </section>
        );
    }
);
FeatureSection.displayName = "FeatureSection";

export { FeatureSection, featureSectionVariants };
