export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    consent: boolean;
}

export type ContactFormFieldName = keyof ContactFormData;

export type ContactFormErrors = Partial<Record<ContactFormFieldName, string>>;
