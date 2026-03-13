import * as React from "react";
import { cn } from "../utils/cn";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />;
});

FormField.displayName = "FormField";

export { FormField };
