import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import { Section } from "../primitives/Section";
import { Container } from "../primitives/Container";
import { Button } from "../primitives/Button";
import { Heading } from "../primitives/Heading";
import { Text } from "../primitives/Text";
import { Stack } from "../primitives/Stack";

const beverageHeroFeatureVariants = cva("relative", {
    variants: {
        background: {
            default: "bg-white",
            muted: "bg-neutral-50",
            primary: "bg-primary-50",
        },
    },
    defaultVariants: {
        background: "default",
    },
});

export interface BeverageHeroFeatureProps
    extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof beverageHeroFeatureVariants> {
    eyebrow?: React.ReactNode;
    heading: React.ReactNode;
    description?: React.ReactNode;
    primaryActionLabel?: string;
    secondaryActionLabel?: string;
    onPrimaryAction?: () => void;
    onSecondaryAction?: () => void;
}

const BeverageHeroFeature = React.forwardRef<HTMLElement, BeverageHeroFeatureProps>(
    (
        {
            className,
            background,
            eyebrow = "Refresh Your World",
            heading,
            description,
            primaryActionLabel = "Explore Products",
            secondaryActionLabel = "Contact Us",
            onPrimaryAction,
            onSecondaryAction,
            ...props
        },
        ref
    ) => (
        <Section
            ref={ref}
            spacing="xl"
            className={cn(beverageHeroFeatureVariants({ background, className }))}
            {...props}
        >
            <Container>
                <Stack gap="lg" className="mx-auto max-w-3xl text-center">
                    <Text as="span" weight="semibold" color="primary" className="tracking-wide uppercase">
                        {eyebrow}
                    </Text>
                    <Heading as="h1" size="2xl">
                        {heading}
                    </Heading>
                    {description && (
                        <Text size="lg" color="muted" leading="relaxed">
                            {description}
                        </Text>
                    )}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <Button size="lg" onClick={onPrimaryAction}>
                            {primaryActionLabel}
                        </Button>
                        <Button size="lg" variant="outline" onClick={onSecondaryAction}>
                            {secondaryActionLabel}
                        </Button>
                    </div>
                </Stack>
            </Container>
        </Section>
    )
);

BeverageHeroFeature.displayName = "BeverageHeroFeature";

export { BeverageHeroFeature, beverageHeroFeatureVariants };
