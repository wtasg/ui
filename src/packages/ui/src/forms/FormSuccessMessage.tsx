import * as React from "react";
import { cn } from "../utils/cn";

export interface FormSuccessMessageProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormSuccessMessage = React.forwardRef<HTMLDivElement, FormSuccessMessageProps>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn("rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700", className)}
            role="status"
            {...props}
        />
    );
});

FormSuccessMessage.displayName = "FormSuccessMessage";

export { FormSuccessMessage };
