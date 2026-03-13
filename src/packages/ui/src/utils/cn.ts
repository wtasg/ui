import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * Handles conditional classes, arrays, and deduplicates Tailwind utilities.
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs));
}
