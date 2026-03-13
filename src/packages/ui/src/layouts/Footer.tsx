import * as React from "react";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

export interface FooterColumn {
    title: React.ReactNode;
    links: {
        label: React.ReactNode;
        href?: string;
        onClick?: () => void;
    }[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
    /** Logo or brand element */
    logo?: React.ReactNode;
    /** Footer description/tagline */
    description?: React.ReactNode;
    /** Navigation columns */
    columns?: FooterColumn[];
    /** Social links or icons */
    socialLinks?: React.ReactNode;
    /** Bottom bar content (copyright, etc.) */
    bottomContent?: React.ReactNode;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
    (
        { className, logo, description, columns, socialLinks, bottomContent, children, ...props },
        ref
    ) => (
        <footer
            ref={ref}
            className={cn("w-full border-t border-neutral-200 bg-white", className)}
            {...props}
        >
            <Container>
                <div className="py-12 md:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                        {/* Brand column */}
                        <div className="lg:col-span-4">
                            {logo && <div className="mb-4">{logo}</div>}
                            {description && (
                                <p className="text-sm text-neutral-600">{description}</p>
                            )}
                            {socialLinks && <div className="mt-4">{socialLinks}</div>}
                        </div>

                        {/* Link columns */}
                        {columns && columns.length > 0 && (
                            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
                                {columns.map((column, index) => (
                                    <div key={index}>
                                        <h3 className="mb-3 text-sm font-semibold text-neutral-900">
                                            {column.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {column.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    {link.href ? (
                                                        <a
                                                            href={link.href}
                                                            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                                                        >
                                                            {link.label}
                                                        </a>
                                                    ) : (
                                                        <button
                                                            onClick={link.onClick}
                                                            className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                                                        >
                                                            {link.label}
                                                        </button>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom bar */}
                {bottomContent && (
                    <div className="border-t border-neutral-200 py-6">
                        <div className="text-center text-sm text-neutral-500">
                            {bottomContent}
                        </div>
                    </div>
                )}

                {children}
            </Container>
        </footer>
    )
);
Footer.displayName = "Footer";

export { Footer };
