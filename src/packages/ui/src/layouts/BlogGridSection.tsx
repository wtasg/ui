import * as React from "react";
import { cn } from "../utils/cn";
import { Container } from "../primitives/Container";

export interface BlogPost {
    title: React.ReactNode;
    excerpt?: React.ReactNode;
    image?: React.ReactNode;
    meta?: React.ReactNode;
    href?: string;
}

export interface BlogGridSectionProps
    extends React.HTMLAttributes<HTMLElement> {
    /** Section heading */
    heading?: React.ReactNode;
    /** Section subtitle */
    subtitle?: React.ReactNode;
    /** Array of blog posts */
    posts?: BlogPost[];
    /** Render function for custom card rendering */
    renderPost?: (post: BlogPost, index: number) => React.ReactNode;
}

const BlogGridSection = React.forwardRef<HTMLElement, BlogGridSectionProps>(
    ({ className, heading, subtitle, posts, renderPost, children, ...props }, ref) => (
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
                {posts && posts.length > 0 && (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) =>
                            renderPost ? (
                                renderPost(post, index)
                            ) : (
                                <article
                                    key={index}
                                    className="group flex flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-soft transition-shadow hover:shadow-medium"
                                >
                                    {post.image && (
                                        <div className="aspect-video overflow-hidden">
                                            {post.image}
                                        </div>
                                    )}
                                    <div className="flex flex-1 flex-col p-6">
                                        {post.meta && (
                                            <div className="mb-2 text-sm text-neutral-500">{post.meta}</div>
                                        )}
                                        <h3 className="mb-2 text-lg font-semibold text-neutral-900 group-hover:text-primary-600">
                                            {post.title}
                                        </h3>
                                        {post.excerpt && (
                                            <p className="flex-1 text-neutral-600">{post.excerpt}</p>
                                        )}
                                    </div>
                                </article>
                            )
                        )}
                    </div>
                )}
                {children}
            </Container>
        </section>
    )
);
BlogGridSection.displayName = "BlogGridSection";

export { BlogGridSection };
