import * as React from "react";
import { cn } from "../utils/cn";

export interface FormCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: React.ReactNode;
    hasError?: boolean;
}

const FormCheckbox = React.forwardRef<HTMLInputElement, FormCheckboxProps>(
    ({ className, label, id, children, hasError = false, ...props }, ref) => {
        return (
            <label htmlFor={id} className="flex items-start gap-3 text-sm text-neutral-700">
                <input
                    ref={ref}
                    id={id}
                    type="checkbox"
                    className={cn(
                        "mt-0.5 h-4 w-4 rounded border text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-60",
                        hasError ? "border-red-500 ring-red-500" : "border-neutral-300",
                        className
                    )}
                    aria-label={(!label && !children && typeof props['aria-label'] === 'undefined') ? 'Checkbox' : undefined}
                    {...props}
                />
                {(label || children) && <span>{label ?? children}</span>}
            </label>
        );
    }
);

FormCheckbox.displayName = "FormCheckbox";

export { FormCheckbox };
