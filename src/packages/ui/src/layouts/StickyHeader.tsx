import * as React from "react";
import { cn } from "../utils/cn";

export interface StickyHeaderProps extends React.HTMLAttributes<HTMLElement> {
    /** Brand/logo area */
    brand?: React.ReactNode;
    /** Primary navigation content */
    navigation?: React.ReactNode;
    /** Breadcrumb content used in the expanded layout */
    breadcrumbs?: React.ReactNode;
    /** Account/settings content used in the expanded layout */
    account?: React.ReactNode;
    /** Optional trailing action for the collapsed layout */
    collapsedAction?: React.ReactNode;
    /** Switches the component into its compact, scrolled state */
    collapsed?: boolean;
    /** Whether the header sticks to the top of the viewport */
    sticky?: boolean;
}

const panelClassName =
    "rounded-[1.5rem] border border-neutral-200 bg-white/90 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/75";

const slotClassName =
    "flex min-h-[4.75rem] items-center rounded-[1.25rem] border border-neutral-200 bg-white px-5 text-sm text-neutral-600 shadow-subtle";

const arrowIcon = (
    <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        className="h-4 w-4"
    >
        <path
            d="M5.5 3 10.5 8l-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const StickyHeader = React.forwardRef<HTMLElement, StickyHeaderProps>(
    (
        {
            className,
            brand,
            navigation,
            breadcrumbs,
            account,
            collapsedAction,
            collapsed = false,
            sticky = true,
            ...props
        },
        ref
    ) => {
        const compactAction = collapsedAction ?? (
            <button
                type="button"
                aria-label="Open quick action"
                className="flex h-14 w-14 items-center justify-center rounded-[1.125rem] border border-neutral-200 bg-white text-neutral-400 transition-colors hover:text-neutral-700"
            >
                {arrowIcon}
            </button>
        );

        return (
            <header
                ref={ref}
                className={cn(
                    "w-full",
                    sticky && "sticky top-0 z-50",
                    className
                )}
                {...props}
            >
                <div
                    className={cn(
                        panelClassName,
                        "mx-auto w-full max-w-7xl p-4 sm:p-5",
                        collapsed
                            ? "transition-[padding] duration-200"
                            : "transition-[padding] duration-200"
                    )}
                >
                    {collapsed ? (
                        <div className="grid gap-4 md:grid-cols-[minmax(0,18rem)_minmax(0,1fr)_auto] md:items-center">
                            <div className={cn(slotClassName, "min-h-[4.25rem] justify-start px-4")}>
                                {brand ?? <span>Brand / Bread / Crumbs</span>}
                            </div>
                            <div className={cn(slotClassName, "min-h-[4.25rem] justify-start px-6")}>
                                {navigation ?? <span>Navigation</span>}
                            </div>
                            <div className="justify-self-start md:justify-self-end">{compactAction}</div>
                        </div>
                    ) : (
                        <div className="grid gap-5">
                            <div className="grid gap-5 lg:grid-cols-[minmax(12rem,15rem)_minmax(0,1fr)] lg:items-start">
                                <div className={cn(slotClassName, "justify-center px-6 text-base")}>
                                    {brand ?? <span>BRAND</span>}
                                </div>
                                <div className={cn(slotClassName, "min-h-[8rem] flex-col items-stretch gap-5 px-6 py-5")}>
                                    {navigation ?? (
                                        <>
                                            <div className="text-center text-lg text-neutral-500">
                                                Primary Navigation
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                                                {Array.from({ length: 4 }).map((_, index) => (
                                                    <span
                                                        key={index}
                                                        className="h-px rounded-full bg-neutral-300"
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:items-center">
                                <div className={cn(slotClassName, "justify-start px-6 text-base")}>
                                    {breadcrumbs ?? <span>/ Bread / Crumbs /</span>}
                                </div>
                                <div className={cn(slotClassName, "justify-between gap-3 px-4 text-base")}>
                                    <span className="truncate">
                                        {account ?? "Dropdown account and settings"}
                                    </span>
                                    <span className="shrink-0 text-neutral-400">{arrowIcon}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
        );
    }
);
StickyHeader.displayName = "StickyHeader";

export { StickyHeader };
