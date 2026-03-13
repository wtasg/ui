import * as React from "react";

export interface FormSpinnerProps extends React.SVGAttributes<SVGSVGElement> {}

const FormSpinner = React.forwardRef<SVGSVGElement, FormSpinnerProps>((props, ref) => {
    return (
        <svg
            ref={ref}
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="form-spinner"
            {...props}
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );
});

FormSpinner.displayName = "FormSpinner";

export { FormSpinner };
