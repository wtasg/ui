import { cn } from "../utils/cn";
import type {
    ButtonPriority,
    ButtonShape,
    ButtonSize,
    LegacyButtonRadius,
    LegacyButtonSize,
    LegacyButtonVariant,
} from "./button.types";

const baseButtonClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 hover:brightness-110 active:scale-95 active:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

const shapeClasses: Record<ButtonShape, string> = {
    rectangle: "rounded-md",
    square: "rounded-md aspect-square px-0",
    round: "rounded-full",
    circle: "rounded-full aspect-square px-0",
    squircle: "rounded-[20%]",
    link: "rounded-none bg-transparent p-0 underline underline-offset-4",
};

const priorityClasses: Record<ButtonPriority, string> = {
    primary:
        "bg-primary-600 text-white visited:bg-primary-700 visited:text-white hover:shadow-md",
    secondary:
        "bg-neutral-200 text-neutral-900 visited:bg-neutral-300 hover:shadow-md",
    tertiary:
        "border border-neutral-300 bg-transparent text-neutral-900 visited:text-neutral-900 hover:bg-neutral-100",
    ghost: "bg-transparent text-neutral-900 visited:text-neutral-900 hover:bg-neutral-100",
    danger: "bg-red-600 text-white visited:bg-red-700 visited:text-white hover:shadow-md",
    success: "bg-green-600 text-white visited:bg-green-700 visited:text-white hover:shadow-md",
    warning: "bg-yellow-500 text-neutral-900 visited:bg-yellow-600 visited:text-neutral-900 hover:shadow-md",
    link: "bg-transparent text-primary-600 visited:text-primary-700 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
    xs: "h-6 px-2 text-xs",
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
    xl: "h-14 px-8 text-lg",
};

const iconSizeClasses: Record<ButtonSize | LegacyButtonSize, string> = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-14 w-14",
    default: "h-10 w-10",
    icon: "h-10 w-10",
};

const legacyVariantToPriority: Record<LegacyButtonVariant, ButtonPriority> = {
    default: "primary",
    destructive: "danger",
    outline: "tertiary",
    minimal: "secondary",
    gradient: "primary",
    elevated: "primary",
    glass: "secondary",
};

const legacyRadiusToShape: Record<LegacyButtonRadius, ButtonShape> = {
    default: "rectangle",
    px4: "rectangle",
    percent4: "squircle",
    full: "round",
};

export function resolveButtonPriority(
    priority?: ButtonPriority,
    variant?: ButtonPriority | LegacyButtonVariant
): ButtonPriority {
    if (priority) {
        return priority;
    }

    if (!variant) {
        return "primary";
    }

    if (variant in legacyVariantToPriority) {
        return legacyVariantToPriority[variant as LegacyButtonVariant];
    }

    return variant as ButtonPriority;
}

export function resolveButtonShape(shape?: ButtonShape, radius?: LegacyButtonRadius): ButtonShape {
    if (shape) {
        return shape;
    }

    if (radius) {
        return legacyRadiusToShape[radius];
    }

    return "rectangle";
}

function resolveButtonSize(size?: ButtonSize | LegacyButtonSize): ButtonSize {
    if (!size || size === "default") {
        return "md";
    }

    if (size === "icon") {
        return "md";
    }

    return size;
}

export function getButtonClasses(options: {
    shape: ButtonShape;
    priority: ButtonPriority;
    size?: ButtonSize | LegacyButtonSize;
    fullWidth?: boolean;
    className?: string;
}): string {
    const resolvedSize = resolveButtonSize(options.size);
    const isIconOnly = options.shape === "circle" || options.shape === "square" || options.size === "icon";
    const sizeClass = isIconOnly ? iconSizeClasses[options.size ?? resolvedSize] : sizeClasses[resolvedSize];

    return cn(
        baseButtonClasses,
        shapeClasses[options.shape],
        priorityClasses[options.priority],
        sizeClass,
        options.fullWidth && "w-full",
        options.className
    );
}
