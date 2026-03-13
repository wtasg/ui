import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary-600 text-white",
                secondary: "border-transparent bg-neutral-200 text-neutral-900",
                outline: "border-neutral-300 text-neutral-700",
                destructive: "border-transparent bg-red-600 text-white",
                success: "border-transparent bg-green-600 text-white",
                warning: "border-transparent bg-yellow-500 text-white",
            },
            size: {
                sm: "px-2 py-0.5 text-2xs",
                default: "px-2.5 py-0.5 text-xs",
                lg: "px-3 py-1 text-sm",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, size, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(badgeVariants({ variant, size, className }))}
            {...props}
        />
    )
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
