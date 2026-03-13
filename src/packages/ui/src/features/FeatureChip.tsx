import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const featureChipVariants = cva(
    "inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100",
                active: "border-primary-600 bg-primary-600 text-white",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface FeatureChipProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof featureChipVariants> {}

const FeatureChip = React.forwardRef<HTMLButtonElement, FeatureChipProps>(
    ({ className, variant, type = "button", ...props }, ref) => (
        <button
            ref={ref}
            type={type}
            className={cn(featureChipVariants({ variant, className }))}
            {...props}
        />
    )
);

FeatureChip.displayName = "FeatureChip";

export { FeatureChip, featureChipVariants };
