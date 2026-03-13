import * as React from "react";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

export interface NavItem {
    label: React.ReactNode;
    href?: string;
    onClick?: () => void;
    children?: NavItem[];
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo or brand element */
    logo?: React.ReactNode;
    /** Navigation items */
    items?: NavItem[];
    /** Right-side actions (buttons, avatar, etc.) */
    actions?: React.ReactNode;
    /** Whether the navbar is sticky */
    sticky?: boolean;
    /** Custom navigation renderer */
    renderNav?: (items: NavItem[]) => React.ReactNode;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
    (
        { className, logo, items, actions, sticky = true, renderNav, children, ...props },
        ref
    ) => {
        const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

        return (
            <header
                ref={ref}
                className={cn(
                    "w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60",
                    sticky && "sticky top-0 z-50",
                    className
                )}
                {...props}
            >
                <Container>
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo */}
                        {logo && <div className="flex shrink-0 items-center">{logo}</div>}

                        {/* Desktop Navigation */}
                        {items && items.length > 0 && (
                            <nav className="hidden md:flex md:items-center md:gap-6">
                                {renderNav
                                    ? renderNav(items)
                                    : items.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            onClick={item.onClick}
                                            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                            </nav>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            {actions && (
                                <div className="hidden md:flex md:items-center md:gap-4">
                                    {actions}
                                </div>
                            )}

                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-expanded={mobileMenuOpen}
                                aria-label="Toggle navigation menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="4" x2="20" y1="12" y2="12" />
                                        <line x1="4" x2="20" y1="6" y2="6" />
                                        <line x1="4" x2="20" y1="18" y2="18" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && items && items.length > 0 && (
                        <div className="border-t border-neutral-200 py-4 md:hidden">
                            <nav className="flex flex-col gap-2">
                                {items.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            item.onClick?.();
                                            setMobileMenuOpen(false);
                                        }}
                                        className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            {actions && (
                                <div className="mt-4 flex flex-col gap-2 border-t border-neutral-200 pt-4">
                                    {actions}
                                </div>
                            )}
                        </div>
                    )}
                </Container>
                {children}
            </header>
        );
    }
);
Navbar.displayName = "Navbar";

export { Navbar };
