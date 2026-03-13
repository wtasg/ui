import * as React from "react";
import { cn } from "../utils/cn";

export interface FormDividerProps extends React.HTMLAttributes<HTMLHRElement> {}

const FormDivider = React.forwardRef<HTMLHRElement, FormDividerProps>(({ className, children, ...props }, ref) => {
    if (children) {
        return (
            <div className={cn("relative flex items-center py-4", className)}>
                <div className="flex-grow border-t border-neutral-200" />
                <span className="mx-4 flex-shrink text-sm font-medium text-neutral-500">{children}</span>
                <div className="flex-grow border-t border-neutral-200" />
            </div>
        );
    }
    return <hr ref={ref} className={cn("border-neutral-200", className)} {...props} />;
});

FormDivider.displayName = "FormDivider";

export { FormDivider };
