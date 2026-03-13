import * as React from "react";
import { cn } from "../utils/cn";

export type ResponsiveLayoutMode = "desktop" | "tablet" | "mobile";

const responsiveLayoutModes: ResponsiveLayoutMode[] = ["desktop", "tablet", "mobile"];

const defaultMaxWidthByMode: Record<ResponsiveLayoutMode, string> = {
    mobile: "max-w-full",
    tablet: "max-w-3xl",
    desktop: "max-w-6xl",
};

const defaultPaddingByMode: Record<ResponsiveLayoutMode, string> = {
    mobile: "px-4",
    tablet: "px-6",
    desktop: "px-8",
};

const defaultPreviewWidthByMode: Record<ResponsiveLayoutMode, string> = {
    mobile: "max-w-[375px]",
    tablet: "max-w-[768px]",
    desktop: "max-w-[1280px]",
};

const modeLabelByLayout: Record<ResponsiveLayoutMode, string> = {
    desktop: "Desktop",
    tablet: "Tablet",
    mobile: "Mobile",
};

const toResponsiveClass = (classesByMode: Record<ResponsiveLayoutMode, string>) =>
    `${classesByMode.mobile} md:${classesByMode.tablet} lg:${classesByMode.desktop}`;

export interface ResponsiveWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    containerClassName?: string;
    maxWidthOverrides?: Partial<Record<ResponsiveLayoutMode, string>>;
    paddingOverrides?: Partial<Record<ResponsiveLayoutMode, string>>;
    layoutMode?: ResponsiveLayoutMode;
    defaultLayoutMode?: ResponsiveLayoutMode;
    onLayoutModeChange?: (layoutMode: ResponsiveLayoutMode) => void;
    preview?: boolean;
    previewLabel?: string;
}

const ResponsiveWrapper = React.forwardRef<HTMLElement, ResponsiveWrapperProps>(
    (
        {
            children,
            className,
            containerClassName,
            maxWidthOverrides,
            paddingOverrides,
            layoutMode,
            defaultLayoutMode = "desktop",
            onLayoutModeChange,
            preview = false,
            previewLabel = "Responsive layout preview",
            ...props
        },
        ref
    ) => {
        const [internalLayoutMode, setInternalLayoutMode] =
            React.useState<ResponsiveLayoutMode>(defaultLayoutMode);

        const activeLayoutMode = layoutMode ?? internalLayoutMode;

        const mergedMaxWidthByMode = {
            ...defaultMaxWidthByMode,
            ...maxWidthOverrides,
        };

        const mergedPaddingByMode = {
            ...defaultPaddingByMode,
            ...paddingOverrides,
        };

        const handleLayoutModeChange = (nextLayoutMode: ResponsiveLayoutMode) => {
            if (layoutMode === undefined) {
                setInternalLayoutMode(nextLayoutMode);
            }
            onLayoutModeChange?.(nextLayoutMode);
        };

        const widthClasses = preview
            ? maxWidthOverrides?.[activeLayoutMode] ?? defaultPreviewWidthByMode[activeLayoutMode]
            : toResponsiveClass(mergedMaxWidthByMode);

        const paddingClasses = preview
            ? mergedPaddingByMode[activeLayoutMode]
            : toResponsiveClass(mergedPaddingByMode);

        return (
            <section ref={ref} className={cn("w-full", className)} {...props}>
                {preview && (
                    <div
                        role="toolbar"
                        aria-label={previewLabel}
                        className="mb-4 flex w-full flex-wrap items-center gap-2"
                    >
                        {responsiveLayoutModes.map((mode) => {
                            const isSelected = activeLayoutMode === mode;

                            return (
                                <button
                                    key={mode}
                                    type="button"
                                    onClick={() => handleLayoutModeChange(mode)}
                                    aria-pressed={isSelected}
                                    aria-label={`Preview ${modeLabelByLayout[mode]} layout`}
                                    className={cn(
                                        "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                                        isSelected
                                            ? "border-primary-600 bg-primary-600 text-white"
                                            : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                                    )}
                                >
                                    {modeLabelByLayout[mode]}
                                </button>
                            );
                        })}
                    </div>
                )}

                <div
                    data-testid="responsive-wrapper-container"
                    className={cn(
                        "mx-auto w-full",
                        widthClasses,
                        paddingClasses,
                        preview && "transition-[max-width,padding] duration-200",
                        containerClassName
                    )}
                >
                    {children}
                </div>
            </section>
        );
    }
);

ResponsiveWrapper.displayName = "ResponsiveWrapper";

export { ResponsiveWrapper };
