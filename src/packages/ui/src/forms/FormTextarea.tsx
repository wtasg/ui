import * as React from "react";
import { cn } from "../utils/cn";
import { baseInputClasses } from "./FormInput";

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    hasError?: boolean;
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
    ({ className, hasError = false, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    baseInputClasses,
                    "min-h-30 resize-y py-3",
                    hasError ? "border-red-500 focus:ring-red-500" : "border-neutral-300",
                    className
                )}
                {...props}
            />
        );
    }
);

FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
