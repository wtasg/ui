import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";

const featureSectionHeaderVariants = cva("flex gap-4", {
    variants: {
        align: {
            left: "items-start text-left",
            center: "items-center text-center",
        },
    },
    defaultVariants: {
        align: "left",
    },
});

export interface FeatureSectionHeaderProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureSectionHeaderVariants> {
    heading: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode;
}

const FeatureSectionHeader = React.forwardRef<HTMLDivElement, FeatureSectionHeaderProps>(
    ({ className, align, heading, subtitle, actions, ...props }, ref) => (
        <div ref={ref} className={cn(featureSectionHeaderVariants({ align, className }))} {...props}>
            <div className="space-y-2">
                <Heading as="h2" size="lg">
                    {heading}
                </Heading>
                {subtitle && (
                    <Text color="muted" size="lg" className="max-w-3xl">
                        {subtitle}
                    </Text>
                )}
            </div>
            {actions}
        </div>
    )
);

FeatureSectionHeader.displayName = "FeatureSectionHeader";

export { FeatureSectionHeader, featureSectionHeaderVariants };
