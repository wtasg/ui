import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

const heroVariants = cva("relative flex items-center", {
    variants: {
        height: {
            default: "min-h-[60vh]",
            sm: "min-h-[40vh]",
            lg: "min-h-[80vh]",
            full: "min-h-screen",
        },
        align: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
        },
    },
    defaultVariants: {
        height: "default",
        align: "center",
    },
});

export interface HeroSectionProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof heroVariants> {
    /** Main heading */
    heading?: React.ReactNode;
    /** Subtitle or description */
    subtitle?: React.ReactNode;
    /** Call-to-action buttons or elements */
    actions?: React.ReactNode;
    /** Background element (image, gradient, etc.) */
    backgroundElement?: React.ReactNode;
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
    (
        {
            className,
            heading,
            subtitle,
            actions,
            backgroundElement,
            height,
            align,
            children,
            ...props
        },
        ref
    ) => (
        <section
            ref={ref}
            className={cn(heroVariants({ height, align, className }))}
            {...props}
        >
            {backgroundElement && (
                <div className="absolute inset-0 overflow-hidden">{backgroundElement}</div>
            )}
            <Container className="relative z-10">
                <div
                    className={cn(
                        "mx-auto flex max-w-3xl flex-col gap-6",
                        align === "center" && "items-center",
                        align === "right" && "items-end",
                        align === "left" && "items-start"
                    )}
                >
                    {heading && (
                        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
                            {heading}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="max-w-2xl text-lg text-neutral-600 sm:text-xl">
                            {subtitle}
                        </p>
                    )}
                    {actions && (
                        <div className="flex flex-wrap gap-4">{actions}</div>
                    )}
                    {children}
                </div>
            </Container>
        </section>
    )
);
HeroSection.displayName = "HeroSection";

export { HeroSection, heroVariants };
