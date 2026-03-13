export const BUTTON_SHAPES = ["rectangle", "square", "round", "circle", "squircle", "link"] as const;

export const BUTTON_PRIORITIES = [
    "primary",
    "secondary",
    "tertiary",
    "ghost",
    "danger",
    "success",
    "warning",
    "link",
] as const;

export const BUTTON_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

export const LEGACY_BUTTON_VARIANTS = [
    "default",
    "destructive",
    "outline",
    "minimal",
    "gradient",
    "elevated",
    "glass",
] as const;

export const LEGACY_BUTTON_SIZES = ["default", "icon"] as const;

export const LEGACY_BUTTON_RADII = ["default", "px4", "percent4", "full"] as const;
