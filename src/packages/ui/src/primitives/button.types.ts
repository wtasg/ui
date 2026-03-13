import * as React from "react";
import {
    BUTTON_PRIORITIES,
    BUTTON_SHAPES,
    BUTTON_SIZES,
    LEGACY_BUTTON_RADII,
    LEGACY_BUTTON_SIZES,
    LEGACY_BUTTON_VARIANTS,
} from "./button.constants";

export type ButtonShape = (typeof BUTTON_SHAPES)[number];
export type ButtonPriority = (typeof BUTTON_PRIORITIES)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export type LegacyButtonVariant = (typeof LEGACY_BUTTON_VARIANTS)[number];
export type LegacyButtonSize = (typeof LEGACY_BUTTON_SIZES)[number];
export type LegacyButtonRadius = (typeof LEGACY_BUTTON_RADII)[number];

type ButtonElement = HTMLButtonElement | HTMLAnchorElement;

export interface ButtonCommonProps {
    children?: React.ReactNode;
    shape?: ButtonShape;
    priority?: ButtonPriority;
    size?: ButtonSize | LegacyButtonSize;
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    onClick?: React.MouseEventHandler<ButtonElement>;
    className?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    ariaLabel?: string;
    variant?: ButtonPriority | LegacyButtonVariant;
    radius?: LegacyButtonRadius;
    asChild?: boolean;
}

export type ButtonProps = ButtonCommonProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonCommonProps> &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonCommonProps>;

export interface ButtonLinkProps extends Omit<ButtonProps, "href"> {
    href: string;
}

export interface IconButtonProps extends Omit<ButtonProps, "children"> {
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
