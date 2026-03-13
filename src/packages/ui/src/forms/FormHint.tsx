import * as React from "react";
import { cn } from "../utils/cn";

export interface FormHintProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormHint = React.forwardRef<HTMLParagraphElement, FormHintProps>(({ className, ...props }, ref) => {
    return <p ref={ref} className={cn("mt-1 text-sm text-neutral-500", className)} {...props} />;
});

FormHint.displayName = "FormHint";

export { FormHint };
