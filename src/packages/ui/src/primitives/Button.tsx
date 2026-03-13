import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils/cn";
import { getButtonClasses, resolveButtonPriority, resolveButtonShape } from "./button.styles";
import type { ButtonGroupProps, ButtonLinkProps, ButtonProps, IconButtonProps } from "./button.types";

function Spinner() {
    return (
        <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="button-spinner"
        >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
    );
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            shape,
            priority,
            variant,
            size,
            radius,
            asChild = false,
            loading = false,
            fullWidth = false,
            children,
            disabled,
            href,
            target,
            rel,
            leftIcon,
            rightIcon,
            ariaLabel,
            onClick,
            onKeyDown,
            ...props
        },
        ref
    ) => {
        const resolvedPriority = resolveButtonPriority(priority, variant);
        const resolvedShape = resolveButtonShape(shape, radius);
        const isDisabled = Boolean(disabled || loading);
        const buttonClasses = getButtonClasses({
            shape: resolvedShape,
            priority: resolvedPriority,
            size,
            fullWidth,
            className,
        });
        const content = (
            <>
                {loading && <Spinner />}
                {leftIcon}
                {children ? <span className={cn(loading && "opacity-70")}>{children}</span> : null}
                {rightIcon}
            </>
        );

        if (href) {
            return (
                <a
                    className={buttonClasses}
                    href={isDisabled ? undefined : href}
                    target={target}
                    rel={rel}
                    aria-disabled={isDisabled || undefined}
                    aria-busy={loading || undefined}
                    aria-label={ariaLabel}
                    tabIndex={isDisabled ? -1 : props.tabIndex}
                    onClick={(event) => {
                        if (isDisabled) {
                            event.preventDefault();
                            event.stopPropagation();
                            return;
                        }

                        onClick?.(event);
                    }}
                    onKeyDown={(event) => {
                        if (isDisabled && (event.key === "Enter" || event.key === " ")) {
                            event.preventDefault();
                        }

                        onKeyDown?.(event);
                    }}
                    {...props}
                >
                    {content}
                </a>
            );
        }

        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={buttonClasses}
                ref={ref}
                disabled={isDisabled}
                aria-busy={loading || undefined}
                aria-label={ariaLabel}
                onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
                onKeyDown={onKeyDown as React.KeyboardEventHandler<HTMLButtonElement>}
                {...props}
            >
                {content}
            </Comp>
        );
    }
);
Button.displayName = "Button";

function ButtonLink({ href, ...props }: ButtonLinkProps) {
    return <Button href={href} {...props} />;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ icon, children, shape = "circle", ariaLabel, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                shape={shape}
                ariaLabel={ariaLabel}
                aria-label={ariaLabel}
                {...props}
            >
                {icon ?? children}
            </Button>
        );
    }
);
IconButton.displayName = "IconButton";

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-stretch *:rounded-none [&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:first-child)]:-ml-px",
                    className
                )}
                role="group"
                {...props}
            >
                {children}
            </div>
        );
    }
);
ButtonGroup.displayName = "ButtonGroup";

const buttonVariants = getButtonClasses;

export { Button, ButtonGroup, ButtonLink, IconButton, buttonVariants };
export type {
    ButtonGroupProps,
    ButtonLinkProps,
    ButtonPriority,
    ButtonProps,
    ButtonShape,
    ButtonSize,
    IconButtonProps,
} from "./button.types";
