import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const avatarVariants = cva(
    "relative inline-flex shrink-0 overflow-hidden rounded-full bg-neutral-200",
    {
        variants: {
            size: {
                xs: "h-6 w-6",
                sm: "h-8 w-8",
                default: "h-10 w-10",
                lg: "h-12 w-12",
                xl: "h-16 w-16",
                "2xl": "h-20 w-20",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface AvatarProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
    ({ className, size, src, alt, fallback, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(avatarVariants({ size, className }))}
            {...props}
        >
            {src ? (
                <img
                    src={src}
                    alt={alt || ""}
                    className="aspect-square h-full w-full object-cover"
                />
            ) : (
                <span className="flex h-full w-full items-center justify-center bg-neutral-300 text-sm font-medium text-neutral-700">
                    {fallback || alt?.charAt(0)?.toUpperCase() || "?"}
                </span>
            )}
        </div>
    )
);
Avatar.displayName = "Avatar";

export { Avatar, avatarVariants };
