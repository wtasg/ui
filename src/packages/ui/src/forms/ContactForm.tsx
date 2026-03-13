import * as React from "react";
import { cn } from "../utils/cn";
import { Button } from "../primitives/Button";
import { FormActions } from "./FormActions";
import { FormCheckbox } from "./FormCheckbox";
import { FormError } from "./FormError";
import { FormField } from "./FormField";
import { FormHint } from "./FormHint";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormSuccessMessage } from "./FormSuccessMessage";
import { FormTextarea } from "./FormTextarea";
import { SubmitButton } from "./SubmitButton";
import type { ContactFormData, ContactFormErrors, ContactFormFieldName } from "./form.types";
import { hasContactFormErrors, validateContactForm, validateContactFormField } from "./form.validation";

const DEFAULT_FORM_DATA: ContactFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
};

export interface ContactFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    onSubmit?: (data: ContactFormData) => Promise<void> | void;
    onSubmitEvent?: (event: React.FormEvent<HTMLFormElement>) => void;
    defaultValues?: Partial<ContactFormData>;
    disabled?: boolean;
    resetOnSuccess?: boolean;
    submitLabel?: string;
    submittingLabel?: string;
    successMessage?: React.ReactNode;
    failureMessage?: React.ReactNode;
}

function getDescribedByIds(hintId?: string, errorId?: string) {
    return [hintId, errorId].filter(Boolean).join(" ") || undefined;
}

const ContactForm = React.forwardRef<HTMLFormElement, ContactFormProps>(
    (
        {
            onSubmit,
            onSubmitEvent,
            defaultValues,
            resetOnSuccess = true,
            submitLabel = "Send Message",
            submittingLabel = "Sending...",
            successMessage = "Your message has been sent successfully.",
            failureMessage = "Failed to send message. Please try again.",
            className,
            disabled,
            ...props
        },
        ref
    ) => {
        const [formData, setFormData] = React.useState<ContactFormData>({ ...DEFAULT_FORM_DATA, ...defaultValues });
        const [errors, setErrors] = React.useState<ContactFormErrors>({});
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [isSubmitted, setIsSubmitted] = React.useState(false);
        const [submitError, setSubmitError] = React.useState<string | null>(null);

        const isDisabled = Boolean(disabled || isSubmitting);

        const setFieldValue = React.useCallback(<K extends ContactFormFieldName>(field: K, value: ContactFormData[K]) => {
            setFormData((previous) => ({ ...previous, [field]: value }));
        }, []);

        const validateField = React.useCallback((field: ContactFormFieldName, nextData: ContactFormData) => {
            const fieldError = validateContactFormField(nextData, field);
            setErrors((previous) => ({ ...previous, [field]: fieldError }));
            return fieldError;
        }, []);

        const handleChange = React.useCallback(
            (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { name, type } = event.target;
                const field = name as ContactFormFieldName;
                const value = type === "checkbox" ? (event.target as HTMLInputElement).checked : event.target.value;
                const nextData = { ...formData, [field]: value } as ContactFormData;

                setFieldValue(field, value as never);

                if (errors[field]) {
                    validateField(field, nextData);
                }
            },
            [errors, formData, setFieldValue, validateField]
        );

        const handleBlur = React.useCallback(
            (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const field = event.target.name as ContactFormFieldName;
                validateField(field, formData);
            },
            [formData, validateField]
        );

        const handleSubmit = React.useCallback(
            async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                onSubmitEvent?.(event);

                const validationErrors = validateContactForm(formData);
                setErrors(validationErrors);

                if (hasContactFormErrors(validationErrors)) {
                    setIsSubmitted(false);
                    return;
                }

                setSubmitError(null);
                setIsSubmitting(true);

                try {
                    await Promise.resolve(onSubmit?.(formData));
                    setIsSubmitted(true);

                    if (resetOnSuccess) {
                        setFormData({ ...DEFAULT_FORM_DATA, ...defaultValues });
                        setErrors({});
                    }
                } catch {
                    setIsSubmitted(false);
                    setSubmitError(typeof failureMessage === "string" ? failureMessage : "Failed to send message. Please try again.");
                } finally {
                    setIsSubmitting(false);
                }
            },
            [defaultValues, failureMessage, formData, onSubmit, onSubmitEvent, resetOnSuccess]
        );

        return (
            <form
                ref={ref}
                className={cn("mx-auto flex w-full max-w-md flex-col gap-4", className)}
                onSubmit={handleSubmit}
                noValidate
                {...props}
            >
                <FormField>
                    <FormLabel htmlFor="contact-name">Name</FormLabel>
                    <FormInput
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        disabled={isDisabled}
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={Boolean(errors.name)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={getDescribedByIds(undefined, errors.name ? "contact-name-error" : undefined)}
                    />
                    {errors.name ? <FormError id="contact-name-error">{errors.name}</FormError> : null}
                </FormField>

                <FormField>
                    <FormLabel htmlFor="contact-email">Email</FormLabel>
                    <FormInput
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        disabled={isDisabled}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={Boolean(errors.email)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={getDescribedByIds(undefined, errors.email ? "contact-email-error" : undefined)}
                    />
                    {errors.email ? <FormError id="contact-email-error">{errors.email}</FormError> : null}
                </FormField>

                <FormField>
                    <FormLabel htmlFor="contact-subject">Subject</FormLabel>
                    <FormInput
                        id="contact-subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help?"
                        disabled={isDisabled}
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={Boolean(errors.subject)}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={getDescribedByIds("contact-subject-hint", errors.subject ? "contact-subject-error" : undefined)}
                    />
                    <FormHint id="contact-subject-hint">Optional, up to 120 characters.</FormHint>
                    {errors.subject ? <FormError id="contact-subject-error">{errors.subject}</FormError> : null}
                </FormField>

                <FormField>
                    <FormLabel htmlFor="contact-message">Message</FormLabel>
                    <FormTextarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell us more about your request"
                        required
                        disabled={isDisabled}
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hasError={Boolean(errors.message)}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={getDescribedByIds("contact-message-hint", errors.message ? "contact-message-error" : undefined)}
                    />
                    <FormHint id="contact-message-hint">Between 10 and 2000 characters.</FormHint>
                    {errors.message ? <FormError id="contact-message-error">{errors.message}</FormError> : null}
                </FormField>

                <FormField>
                    <FormCheckbox
                        id="contact-consent"
                        name="consent"
                        required
                        disabled={isDisabled}
                        checked={formData.consent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={getDescribedByIds(undefined, errors.consent ? "contact-consent-error" : undefined)}
                        label="I agree to be contacted regarding my inquiry."
                    />
                    {errors.consent ? <FormError id="contact-consent-error">{errors.consent}</FormError> : null}
                </FormField>

                {submitError ? (
                    <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700" role="alert">
                        <p>{submitError}</p>
                        <Button type="submit" priority="tertiary" size="sm" className="mt-2">
                            Retry
                        </Button>
                    </div>
                ) : null}

                {isSubmitted ? <FormSuccessMessage>{successMessage}</FormSuccessMessage> : null}

                <FormActions>
                    <SubmitButton loading={isSubmitting} loadingLabel={submittingLabel} disabled={Boolean(disabled)}>
                        {submitLabel}
                    </SubmitButton>
                </FormActions>
            </form>
        );
    }
);

ContactForm.displayName = "ContactForm";

export { ContactForm };
