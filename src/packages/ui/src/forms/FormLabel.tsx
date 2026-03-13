import * as React from "react";
import { cn } from "../utils/cn";

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(({ className, ...props }, ref) => {
    return <label ref={ref} className={cn("text-sm font-medium text-neutral-900", className)} {...props} />;
});

FormLabel.displayName = "FormLabel";

export { FormLabel };
