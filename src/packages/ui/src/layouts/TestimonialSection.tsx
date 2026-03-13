import * as React from "react";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

export interface Testimonial {
    quote: React.ReactNode;
    author: React.ReactNode;
    role?: React.ReactNode;
    avatar?: React.ReactNode;
}

export interface TestimonialSectionProps
    extends React.HTMLAttributes<HTMLElement> {
    /** Section heading */
    heading?: React.ReactNode;
    /** Section subtitle */
    subtitle?: React.ReactNode;
    /** Array of testimonials */
    testimonials?: Testimonial[];
}

const TestimonialSection = React.forwardRef<HTMLElement, TestimonialSectionProps>(
    ({ className, heading, subtitle, testimonials, children, ...props }, ref) => (
        <section
            ref={ref}
            className={cn("w-full py-12 md:py-16", className)}
            {...props}
        >
            <Container>
                {(heading || subtitle) && (
                    <div className="mb-12 text-center">
                        {heading && (
                            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                                {heading}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mt-4 text-lg text-neutral-600">{subtitle}</p>
                        )}
                    </div>
                )}
                {testimonials && testimonials.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6 shadow-soft"
                            >
                                <blockquote className="flex-1 text-neutral-700">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>
                                <div className="mt-4 flex items-center gap-3">
                                    {testimonial.avatar}
                                    <div>
                                        <div className="font-semibold text-neutral-900">
                                            {testimonial.author}
                                        </div>
                                        {testimonial.role && (
                                            <div className="text-sm text-neutral-500">
                                                {testimonial.role}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {children}
            </Container>
        </section>
    )
);
TestimonialSection.displayName = "TestimonialSection";

export { TestimonialSection };
