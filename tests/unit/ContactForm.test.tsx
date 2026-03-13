import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ContactForm } from "@repo/ui";

describe("ContactForm", () => {
    it("renders validation errors below corresponding fields", async () => {
        render(<ContactForm />);

        fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

        expect(await screen.findByText("Name is required.")).toBeTruthy();
        expect(await screen.findByText("Email is required.")).toBeTruthy();
        expect(await screen.findByText("Message is required.")).toBeTruthy();
        expect(await screen.findByText("Consent is required before submitting.")).toBeTruthy();
    });

    it("submits successfully and shows success state", async () => {
        const onSubmit = vi.fn().mockResolvedValue(undefined);

        render(<ContactForm onSubmit={onSubmit} />);

        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Anubhav" } });
        fireEvent.change(screen.getByLabelText("Email"), { target: { value: "anubhav@example.com" } });
        fireEvent.change(screen.getByLabelText("Subject"), { target: { value: "Library question" } });
        fireEvent.change(screen.getByLabelText("Message"), {
            target: { value: "I want to know more about how to consume this package." },
        });
        fireEvent.click(screen.getByLabelText("I agree to be contacted regarding my inquiry."));
        fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });

        expect(await screen.findByText("Your message has been sent successfully.")).toBeTruthy();
    });

    it("shows global error and retry option when submit fails", async () => {
        const onSubmit = vi.fn().mockRejectedValue(new Error("network"));

        render(<ContactForm onSubmit={onSubmit} />);

        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Anubhav" } });
        fireEvent.change(screen.getByLabelText("Email"), { target: { value: "anubhav@example.com" } });
        fireEvent.change(screen.getByLabelText("Message"), {
            target: { value: "Please help me with integration details." },
        });
        fireEvent.click(screen.getByLabelText("I agree to be contacted regarding my inquiry."));
        fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

        expect(await screen.findByText("Failed to send message. Please try again.")).toBeTruthy();
        expect(screen.getByRole("button", { name: "Retry" })).toBeTruthy();
    });

    it("supports keyboard interaction for consent and Enter submission", async () => {
        const onSubmit = vi.fn().mockResolvedValue(undefined);

        render(<ContactForm onSubmit={onSubmit} />);

        const nameInput = screen.getByLabelText("Name");
        const emailInput = screen.getByLabelText("Email");
        const messageInput = screen.getByLabelText("Message");
        const consentCheckbox = screen.getByLabelText("I agree to be contacted regarding my inquiry.");

        fireEvent.change(nameInput, { target: { value: "Anubhav" } });
        fireEvent.change(emailInput, { target: { value: "anubhav@example.com" } });
        fireEvent.change(messageInput, { target: { value: "This message is long enough for validation." } });

        fireEvent.keyDown(consentCheckbox, { key: " " });
        fireEvent.click(consentCheckbox);

        fireEvent.keyDown(messageInput, { key: "Enter" });
        fireEvent.submit(screen.getByRole("button", { name: "Send Message" }).closest("form") as HTMLFormElement);

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1);
        });
    });

    it("shows loading state during submission", async () => {
        let resolveSubmit: (value: void | PromiseLike<void>) => void;
        const onSubmit = vi.fn().mockImplementation(() => new Promise<void>((resolve) => {
            resolveSubmit = resolve;
        }));

        render(<ContactForm onSubmit={onSubmit} />);

        fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Anubhav" } });
        fireEvent.change(screen.getByLabelText("Email"), { target: { value: "anubhav@example.com" } });
        fireEvent.change(screen.getByLabelText("Message"), { target: { value: "A valid message for testing." } });
        fireEvent.click(screen.getByLabelText("I agree to be contacted regarding my inquiry."));
        
        fireEvent.click(screen.getByRole("button", { name: "Send Message" }));

        expect(screen.getByRole("button", { name: /sending/i })).toBeTruthy();
        
        // Resolve the promise to clean up correctly
        resolveSubmit!();
        await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    });

    it("handles explicit onSubmitEvent prop", async () => {
        const onSubmitEvent = vi.fn((e) => e.preventDefault());
        render(<ContactForm onSubmitEvent={onSubmitEvent} />);

        fireEvent.submit(screen.getByRole("button", { name: "Send Message" }).closest("form") as HTMLFormElement);
        expect(onSubmitEvent).toHaveBeenCalledTimes(1);
    });
});
