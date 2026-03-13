import * as React from "react";
import { cn } from "../utils/cn";

const baseInputClasses =
    "block w-full rounded-md border px-3 py-2 text-sm transition placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-60";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean;
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(({ className, hasError = false, ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={cn(baseInputClasses, hasError ? "border-red-500 focus:ring-red-500" : "border-neutral-300", className)}
            {...props}
        />
    );
});

FormInput.displayName = "FormInput";

export { FormInput, baseInputClasses };
