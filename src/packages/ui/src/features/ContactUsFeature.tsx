import * as React from "react";
import { Section } from "../primitives/Section";
import { Container } from "../primitives/Container";
import { Card, CardContent, CardHeader, CardTitle } from "../primitives/Card";
import { Text } from "../primitives/Text";
import { FeatureSectionHeader } from "./FeatureSectionHeader";
import { ContactForm, type ContactFormData } from "../forms";

export interface ContactUsFeatureProps extends React.HTMLAttributes<HTMLElement> {
    heading?: React.ReactNode;
    subtitle?: React.ReactNode;
    submitLabel?: string;
    onFormSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    onSubmitData?: (data: ContactFormData) => Promise<void> | void;
}

const ContactUsFeature = React.forwardRef<HTMLElement, ContactUsFeatureProps>(
    (
        {
            heading = "Contact Us",
            subtitle = "Have a question or partnership inquiry? Send us a message.",
            submitLabel = "Send Message",
            onFormSubmit,
            onSubmitData,
            className,
            ...props
        },
        ref
    ) => (
        <Section ref={ref} spacing="lg" background="muted" className={className} {...props}>
            <Container size="lg">
                <div className="space-y-6">
                    <FeatureSectionHeader heading={heading} subtitle={subtitle} />
                    <Card>
                        <CardHeader>
                            <CardTitle>Get in touch</CardTitle>
                            <Text color="muted" size="sm">
                                We usually respond within one business day.
                            </Text>
                        </CardHeader>
                        <CardContent>
                            <ContactForm submitLabel={submitLabel} onSubmit={onSubmitData} onSubmitEvent={onFormSubmit} />
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    )
);

ContactUsFeature.displayName = "ContactUsFeature";

export { ContactUsFeature };
