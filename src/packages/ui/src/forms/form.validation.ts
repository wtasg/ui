import type { ContactFormData, ContactFormErrors, ContactFormFieldName } from "./form.types";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): boolean {
    return EMAIL_PATTERN.test(email);
}

export function validateRequired(value: string): boolean {
    return value.trim().length > 0;
}

export function validateMinLength(value: string, min: number): boolean {
    return value.trim().length >= min;
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
    return {
        name: validateContactFormField(data, "name"),
        email: validateContactFormField(data, "email"),
        subject: validateContactFormField(data, "subject"),
        message: validateContactFormField(data, "message"),
        consent: validateContactFormField(data, "consent"),
    };
}

export function validateContactFormField(data: ContactFormData, field: ContactFormFieldName): string | undefined {
    const name = data.name.trim();
    const email = data.email.trim();
    const subject = data.subject.trim();
    const message = data.message.trim();

    if (field === "name") {
        if (!name) {
            return "Name is required.";
        }

        if (name.length < 2) {
            return "Name must be at least 2 characters.";
        }

        return undefined;
    }

    if (field === "email") {
        if (!email) {
            return "Email is required.";
        }

        if (!EMAIL_PATTERN.test(email)) {
            return "Please enter a valid email address.";
        }

        return undefined;
    }

    if (field === "subject") {
        if (subject.length > 120) {
            return "Subject must be 120 characters or fewer.";
        }

        return undefined;
    }

    if (field === "message") {
        if (!message) {
            return "Message is required.";
        }

        if (message.length < 10) {
            return "Message must be at least 10 characters.";
        }

        if (message.length > 2000) {
            return "Message must be 2000 characters or fewer.";
        }

        return undefined;
    }

    if (field === "consent") {
        if (!data.consent) {
            return "Consent is required before submitting.";
        }

        return undefined;
    }

    return undefined;
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
    return Object.values(errors).some(Boolean);
}
