import * as React from "react";
import { Section } from "../primitives/Section";
import { Container } from "../primitives/Container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../primitives/Card";
import { Text } from "../primitives/Text";
import { Button } from "../primitives/Button";
import { FeatureSectionHeader } from "./FeatureSectionHeader";
import { FeatureChip } from "./FeatureChip";
import {
    HorizontalScroller,
    HorizontalScrollerItem,
    HorizontalScrollerTrack,
} from "./HorizontalScroller";

export interface ProductSideScrollItem {
    id: string;
    name: string;
    price: string;
    imageSrc?: string;
    imageAlt?: string;
}

export interface ProductSideScrollFeatureProps
    extends React.HTMLAttributes<HTMLElement> {
    heading?: React.ReactNode;
    subtitle?: React.ReactNode;
    categories?: string[];
    activeCategory?: string;
    onCategoryChange?: (category: string) => void;
    items: ProductSideScrollItem[];
    onViewDetails?: (item: ProductSideScrollItem) => void;
}

const ProductSideScrollFeature = React.forwardRef<
    HTMLElement,
    ProductSideScrollFeatureProps
>(
    (
        {
            heading = "Our Popular Products",
            subtitle,
            categories,
            activeCategory,
            onCategoryChange,
            items,
            onViewDetails,
            className,
            ...props
        },
        ref
    ) => (
        <Section ref={ref} spacing="lg" className={className} {...props}>
            <Container>
                <div className="space-y-6">
                    <FeatureSectionHeader heading={heading} subtitle={subtitle} />

                    {categories && categories.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <FeatureChip
                                    key={category}
                                    variant={activeCategory === category ? "active" : "default"}
                                    onClick={() => onCategoryChange?.(category)}
                                >
                                    {category}
                                </FeatureChip>
                            ))}
                        </div>
                    )}

                    <HorizontalScroller>
                        <HorizontalScrollerTrack>
                            {items.map((item) => (
                                <HorizontalScrollerItem key={item.id} className="min-w-[260px] sm:min-w-[280px]">
                                    <Card variant="default" className="h-full" padding="none">
                                        <CardHeader className="p-4 pb-0">
                                            <div className="aspect-square overflow-hidden rounded-md bg-neutral-100">
                                                {item.imageSrc ? (
                                                    <img
                                                        src={item.imageSrc}
                                                        alt={item.imageAlt ?? item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center text-neutral-400">
                                                        <Text as="span" color="muted" size="sm">
                                                            No image
                                                        </Text>
                                                    </div>
                                                )}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <CardTitle className="text-lg">{item.name}</CardTitle>
                                            <Text weight="semibold" color="primary" className="mt-2">
                                                {item.price}
                                            </Text>
                                        </CardContent>
                                        <CardFooter className="p-4 pt-0">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => onViewDetails?.(item)}
                                            >
                                                View Details
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </HorizontalScrollerItem>
                            ))}
                        </HorizontalScrollerTrack>
                    </HorizontalScroller>
                </div>
            </Container>
        </Section>
    )
);

ProductSideScrollFeature.displayName = "ProductSideScrollFeature";

export { ProductSideScrollFeature };
