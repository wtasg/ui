import * as React from "react";
import { cn } from "../utils/cn";
import { baseInputClasses } from "./FormInput";

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    hasError?: boolean;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(({ className, label, id, hasError = false, ...props }, ref) => {
    const select = (
        <select
            ref={ref}
            id={id}
            className={cn(baseInputClasses, hasError ? "border-red-500 focus:ring-red-500" : "border-neutral-300", className)}
            aria-label={!label ? (props['aria-label'] || 'Select option') : undefined}
            {...props}
        />
    );

    if (label) {
        return (
            <div className="space-y-1.5">
                <label htmlFor={id} className="text-sm font-medium text-neutral-700">
                    {label}
                </label>
                {select}
            </div>
        );
    }

    return select;
});

FormSelect.displayName = "FormSelect";

export { FormSelect };
