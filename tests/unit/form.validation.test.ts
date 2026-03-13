import { describe, it, expect } from "vitest";
import { validateEmail, validateRequired, validateMinLength, validateContactForm, validateContactFormField } from "../../src/packages/ui/src/forms/form.validation";

describe("form.validation", () => {
    describe("validateEmail", () => {
        it("validates correct emails", () => {
            expect(validateEmail("test@example.com")).toBe(true);
            expect(validateEmail("user.name+tag@sub.domain.co")).toBe(true);
        });

        it("invalidates incorrect emails", () => {
            expect(validateEmail("test")).toBe(false);
            expect(validateEmail("@example.com")).toBe(false);
            expect(validateEmail("test@.com")).toBe(false);
            expect(validateEmail("")).toBe(false);
        });
    });

    describe("validateRequired", () => {
        it("returns true for non-empty strings", () => {
            expect(validateRequired("test")).toBe(true);
            expect(validateRequired("  a  ")).toBe(true);
        });

        it("returns false for empty or whitespace strings", () => {
            expect(validateRequired("")).toBe(false);
            expect(validateRequired("   ")).toBe(false);
        });
    });

    describe("validateMinLength", () => {
        it("validates length correctly", () => {
            expect(validateMinLength("abc", 3)).toBe(true);
            expect(validateMinLength("abcd", 3)).toBe(true);
            expect(validateMinLength("ab", 3)).toBe(false);
        });
    });

    describe("validateContactForm", () => {
        it("returns no errors for valid data", () => {
            const data = {
                name: "Anubhav",
                email: "test@example.com",
                subject: "Support Request",
                message: "This is a long enough message for testing purposes.",
                consent: true
            };
            const result = validateContactForm(data);
            expect(Object.keys(result).every(k => result[k as keyof typeof result] === undefined)).toBe(true);
        });

        it("returns errors for invalid data", () => {
            const data = {
                name: "A", // too short
                email: "invalid",
                subject: "A".repeat(121),
                message: "", // empty
                consent: false
            };
            const result = validateContactForm(data);
            expect(result.name).toBe("Name must be at least 2 characters.");
            expect(result.email).toBeTruthy();
            expect(result.subject).toBeTruthy();
            expect(result.message).toBe("Message is required.");
            expect(result.consent).toBeTruthy();
        });

        it("validates consent", () => {
            const data = {
                name: "Anubhav",
                email: "test@example.com",
                subject: "Sub",
                message: "This is a valid message.",
                consent: false
            };
            const result = validateContactForm(data);
            expect(result.consent).toBe("Consent is required before submitting.");
        });

        it("validates message max length", () => {
             const data = {
                name: "Anubhav",
                email: "test@example.com",
                subject: "Sub",
                message: "A".repeat(2001),
                consent: true
            };
            const result = validateContactForm(data);
            expect(result.message).toBe("Message must be 2000 characters or fewer.");
        });
        it("validates message length", () => {
            const data = {
                name: "Anubhav",
                email: "test@example.com",
                subject: "Sub",
                message: "12345", // too short (min 10)
                consent: true
            };
            const result = validateContactForm(data);
            expect(result.message).toBe("Message must be at least 10 characters.");
        });

        it("returns undefined for unknown fields", () => {
             const data = {
                name: "Anubhav",
                email: "test@example.com",
                subject: "Sub",
                message: "This is a valid message.",
                consent: true
            };
            // @ts-ignore - testing fallthrough
            const result = validateContactFormField(data, "unknown");
            expect(result).toBeUndefined();
        });
    });
});
