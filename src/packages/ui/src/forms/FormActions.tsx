import * as React from "react";
import { cn } from "../utils/cn";

export interface FormActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormActions = React.forwardRef<HTMLDivElement, FormActionsProps>(({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex items-center gap-3 pt-2", className)} {...props} />;
});

FormActions.displayName = "FormActions";

export { FormActions };
