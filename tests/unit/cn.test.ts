import { describe, expect, it } from "vitest";
import { cn } from "@repo/ui/utils/cn";

describe("cn", () => {
    it("merges conditional class values", () => {
        const result = cn("px-4", false && "hidden", "py-2", null, undefined);

        expect(result).toContain("px-4");
        expect(result).toContain("py-2");
        expect(result).not.toContain("hidden");
    });

    it("deduplicates conflicting tailwind utilities", () => {
        const result = cn("px-2", "px-4", "text-sm", "text-lg");

        expect(result).toContain("px-4");
        expect(result).toContain("text-lg");
        expect(result).not.toContain("px-2");
        expect(result).not.toContain("text-sm");
    });
});
