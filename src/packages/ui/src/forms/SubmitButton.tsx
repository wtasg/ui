import * as React from "react";
import { Button, type ButtonProps } from "../primitives/Button";
import { FormSpinner } from "./FormSpinner";

export interface SubmitButtonProps extends Omit<ButtonProps, "type"> {
    loading?: boolean;
    loadingLabel?: string;
}

const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
    ({ loading = false, loadingLabel = "Sending...", children, disabled, ...props }, ref) => {
        return (
            <Button ref={ref} type="submit" disabled={disabled || loading} aria-busy={loading || undefined} {...props}>
                {loading ? (
                    <span className="inline-flex items-center gap-2">
                        <FormSpinner />
                        <span>{loadingLabel}</span>
                    </span>
                ) : (
                    children
                )}
            </Button>
        );
    }
);

SubmitButton.displayName = "SubmitButton";

export { SubmitButton };
