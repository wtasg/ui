import * as React from "react";
import { cn } from "../utils/cn";

export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(({ className, ...props }, ref) => {
    return <p ref={ref} className={cn("mt-1 text-sm text-red-600", className)} {...props} />;
});

FormError.displayName = "FormError";

export { FormError };
