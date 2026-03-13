import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const inputVariants = cva(
    "flex w-full rounded-md border bg-white text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "border-neutral-300",
                error: "border-red-500 focus-visible:ring-red-500",
            },
            inputSize: {
                sm: "h-9 px-3 text-xs",
                default: "h-10 px-3 py-2",
                lg: "h-11 px-4 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            inputSize: "default",
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, inputSize, type, ...props }, ref) => (
        <input
            type={type}
            className={cn(inputVariants({ variant, inputSize, className }))}
            ref={ref}
            {...props}
        />
    )
);
Input.displayName = "Input";

export { Input, inputVariants };
